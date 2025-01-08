import { CgMenuGridR } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ButtonLogout from "./ButtonLogout";
import Link from "next/link";
import { SlEnergy } from "react-icons/sl";

interface Props {
  name: string | null;
  email: string | null;
}

const ButtonMenuAside = ({ name, email }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <CgMenuGridR size={50} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="flex flex-col justify-between">
        <SheetHeader className="text-left">
          <SheetTitle className="text-xs text-zinc-500">{name}</SheetTitle>
          <SheetDescription className="text-xs text-zinc-500">
            {email}
          </SheetDescription>
        </SheetHeader>

        <SheetDescription>
        <div className="bg-blue-600 text-white hover:opacity-80 transition duration-200 rounded-full shadow-md border border-zinc-300">
              <Link href={"/dashboard/metas"} className="font-bold p-2 flex gap-x-1 items-center justify-center">
                <SlEnergy /> Suas metas
              </Link>
            </div>
        </SheetDescription>
        <SheetFooter>
          <SheetClose asChild>
            <ButtonLogout />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ButtonMenuAside;
