import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import ButtonMenuAside from "./ButtonMenuAsider";
import Link from "next/link";
import ButtonLogout from "./ButtonLogout";

interface Props {
  name: string | null;
  email: string | null;
}

const AsideBar = ({name, email}: Props) => {
  return (
    <aside>
      <div className="hidden md:flex">
        {/* DESKTOP */}
        <Card className="rounded min-w-[250px] max-w-[280px] h-[400px] flex flex-col justify-between">
          <CardHeader>
            <div>
              <p className="text-xs text-zinc-500">{name}</p>
              <p className="text-xs text-zinc-500">{email}</p>
            </div>
          </CardHeader>

          <CardContent>
            <div>
              <Link href={"/dashboard/metas"} className="font-bold">
                Suas metas
              </Link>
            </div>
          </CardContent>

          <CardFooter>
            <ButtonLogout />
          </CardFooter>
        </Card>
      </div>

      <div className="flex md:hidden">
        {/* MOBILE */}
        <ButtonMenuAside name={name} email={email}/>
      </div>
    </aside>
  );
};

export default AsideBar;
