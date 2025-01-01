import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import ButtonMenuAside from "./ButtonMenuAsider";
import Link from "next/link";
import ButtonLogout from "./ButtonLogout";

const AsideBar = () => {
  return (
    <aside>
      <div className="hidden md:flex">
        {/* DESKTOP */}
        <Card className="rounded h-[400px] flex flex-col justify-between">
          <CardHeader>
            <div>
              <p className="text-xs text-zinc-500">John Doe</p>
              <p className="text-xs text-zinc-500">johndoexample@example.com</p>
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
        <ButtonMenuAside />
      </div>
    </aside>
  );
};

export default AsideBar;
