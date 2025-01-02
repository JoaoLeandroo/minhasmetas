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

interface Props {
  name: string | null;
  email: string | null;
}

const ButtonMenuAside = ({name, email}: Props) => {
    return ( 
        <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline"><CgMenuGridR size={50}/></Button>
        </SheetTrigger>
        <SheetContent side={'left'} className="flex flex-col justify-between">
          <SheetHeader className="text-left">
            <SheetTitle className="text-xs text-zinc-500">{name}</SheetTitle>
            <SheetDescription className="text-xs text-zinc-500">
              {email}
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