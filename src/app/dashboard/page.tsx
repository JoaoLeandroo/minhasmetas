import AsideBar from "@/components/others/AsideBar";
import ContainerMain from "@/components/others/ContainerMain";
import { Card, CardHeader } from "@/components/ui/card";

const Dashboard = () => {
    return ( 
        <ContainerMain>
            <div className="flex gap-x-1 mt-3">
                {/* Barra Lateral */}
                <AsideBar/>

                {/* Conteudo principal */}
                <main className="w-full">
                    <Card className="w-full h-[400px] rounded">
                        <CardHeader>
                            teste
                        </CardHeader>
                    </Card>
                </main>
            </div>

        </ContainerMain>
     );
}
 
export default Dashboard;