import AsideBar from "@/components/others/AsideBar";
import ContainerMain from "@/components/others/ContainerMain";
import { Card, CardContent } from "@/components/ui/card";
import ButtonAddMetas from "@/components/others/ButtonAddMetas";

const Dashboard = () => {
    return ( 
        <ContainerMain>
            <div className="flex gap-x-1 mt-3">
                {/* Barra Lateral */}
                <AsideBar/>

                {/* Conteudo principal */}
                <main className="w-full">
                    <Card className="w-full h-[400px] flex items-center justify-center rounded">
                        <CardContent>
                            <ButtonAddMetas/>
                        </CardContent>
                    </Card>
                </main>
            </div>

        </ContainerMain>
     );
}
 
export default Dashboard;