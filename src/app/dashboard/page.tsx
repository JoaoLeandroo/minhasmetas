"use client"
import AsideBar from "@/components/others/AsideBar";
import ContainerMain from "@/components/others/ContainerMain";
import { Card, CardContent } from "@/components/ui/card";
import ButtonAddMetas from "@/components/others/ButtonAddMetas";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";
import { useState, useEffect } from "react";

type TokenPayload = {
  email: string;
  name: string;
};

const Dashboard = () => {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState<string | null>("")

  useEffect(() => {
    const token = Cookies.get("metas_token"); 
    const loadToken = (token: string | undefined) => {
      if (!token) {
        console.error("Token não encontrado");
        return null;
      }
      const decoded = decode(token) as TokenPayload | null;
      
      if (decoded && typeof decoded !== "string") {
        setEmail(decoded.email);
        setNome(decoded.name);
      } else {
        console.error("Token inválido ou sem payload");
      }
    }
    
    loadToken(token)
  }, [])
  
  return (
    <ContainerMain>
      <div className="flex gap-x-1 mt-3">
        {/* Barra Lateral */}
        <AsideBar name={nome} email={email}/>

        {/* Conteudo principal */}
        <main className="w-full">
          <Card className="w-full h-[400px] flex items-center justify-center rounded">
            <CardContent>
              <ButtonAddMetas />
            </CardContent>

            <div>teste</div>
          </Card>
        </main>
      </div>
    </ContainerMain>
  );
};

export default Dashboard;
