import { ReactNode } from "react";

const ContainerMain = ({children}: {children: ReactNode}) => {
    return ( 
        <div className="max-w-[1920px] w-full mx-auto px-4 md:px-8 lg:px-16">
            {children}
        </div>
     );
}
 
export default ContainerMain;