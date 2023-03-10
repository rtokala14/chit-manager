import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import ThemeDropdown from "./themeDropdown";

function TopBar() {
  const session = useSession();
  return (
    <div className=" sticky top-0 z-50 flex w-full items-center justify-between border-b border-b-slate-400 p-2 px-4 dark:border-b-slate-600">
      <Link href={"/"} className=" text-xl font-medium">
        Chits Manager
      </Link>
      <div className=" flex items-center gap-2">
        <ThemeDropdown />
        <Button
          variant={session.status === "authenticated" ? "outline" : "default"}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() =>
            session.status === "authenticated" ? signOut() : signIn()
          }
        >
          {session.status === "authenticated" ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
}

export default TopBar;
