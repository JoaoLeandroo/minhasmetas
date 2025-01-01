import { IoMdLogOut } from "react-icons/io";
import { Button } from "../ui/button";

const ButtonLogout = () => {
    return ( 
    <Button variant={"destructive"} className="w-full">
        <IoMdLogOut className="w-14 h-14" />
      </Button>
     );
}
 
export default ButtonLogout;