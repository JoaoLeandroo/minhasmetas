"use client";
import { SlEnergy } from "react-icons/sl";
import ContainerMain from "@/components/others/ContainerMain";
import { loadResults } from "@/lib/action";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";

interface Dados {
    id: string;
    createAt: Date;
    updateAt: Date;
    treino: string;
    local: string;
    energia: number;
    desc: string;
    usuarioId: string;
}

type TokenPayload = {
    email: string;
    name: string;
    id: string;
  };

const PageMetas = () => {
  const [dados, setDados] = useState<Dados[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const [id, setId] = useState("")
  
  useEffect(() => {
        // pegar token
      const token = Cookies.get("metas_token"); 
      const loadToken = (token: string | undefined) => {
        if (!token) {
          console.error("Token não encontrado");
          return null;
        }
        const decoded = decode(token) as TokenPayload | null;
        
        if (decoded && typeof decoded !== "string") {
          setId(decoded.id)
        } else {
          console.error("Token inválido ou sem payload");
        }
      }
      
      loadToken(token)
    const fetchData = async () => {
      try {
        const resultados = await loadResults(id); // Aguarda os dados serem carregados
        setDados(resultados);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <ContainerMain>
        <div className="flex flex-col gap-y-5 mt-8 w-full items-center">
            <div className="W-full flex flex-col items-center justify-center">
                <Link href={"/"}>Return home</Link> 
                <p>
                    Voce já realizou {dados.length} treinos!
                </p>
            </div>
        {loading ? (
            <p>Carregando...</p>
          ) : dados.length > 0 ? (
            dados.map((item) => (
              <Card key={item.id} className="max-w-[500px] w-full">
                <CardHeader>
                    <div className="flex justify-between">
                    <CardTitle>{item.treino}</CardTitle>
                        <CardDescription className="font-semibold flex gap-x-1 items-center justify-center"><SlEnergy /> {item.energia}%</CardDescription>
                    </div>
                        <CardDescription className="text-xs text-zinc-400">local: {item.local}</CardDescription>
                </CardHeader>
                <CardContent>
                    <CardDescription>{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>Nenhum dado disponível.</p>
          )}
        </div>
    </ContainerMain>
  );
};

export default PageMetas;
