import { useSession } from "next-auth/react";
import Link from "next/link";
import { cn } from "~/utils/twHelper";
import { Button } from "./ui/button";
import { Home, Plus } from "lucide-react";
import { useRouter } from "next/router";

function SideBar() {
  const { status } = useSession();
  const route = useRouter().pathname;
  return (
    <div
      className={cn(
        "sticky flex min-h-[94vh] flex-col items-center gap-2 border-r border-r-slate-400 px-2 pt-2 shadow-md dark:border-slate-600",
        status === "authenticated" ? "flex" : "hidden"
      )}
    >
      <Link href={"/"}>
        <Button
          variant={route === "/" ? "subtle" : "ghost"}
          className=" rounded-full p-3"
        >
          <Home className={cn("h-5 w-5")} />
        </Button>
      </Link>
      <Link href={"/create"}>
        <Button
          variant={route === "/create" ? "subtle" : "ghost"}
          className=" rounded-full p-3"
        >
          <Plus className={cn("h-5 w-5")} />
        </Button>
      </Link>
    </div>
  );
}

export default SideBar;
