import { CgMenuGridR } from "react-icons/cg";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import ButtonLogout from "./ButtonLogout";

const ButtonMenuAside = () => {
    return ( 
        <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline"><CgMenuGridR size={50}/></Button>
        </SheetTrigger>
        <SheetContent side={'left'} className="flex flex-col justify-between">
          <SheetHeader className="text-left">
            <SheetTitle className="text-xs text-zinc-500">John Doe</SheetTitle>
            <SheetDescription className="text-xs text-zinc-500">
              johndoexample@example.com
            </SheetDescription>
          </SheetHeader>

          <SheetDescription>
            metas... Here.
          </SheetDescription>
          <SheetFooter>
            <SheetClose asChild>
              <ButtonLogout/>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
     );
}
 
export default ButtonMenuAside;