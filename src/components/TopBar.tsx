import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

function TopBar() {
  const session = useSession();
  return (
    <div className=" fixed top-0 flex w-full items-center justify-between border p-2 px-4">
      <Link href={"/"} className=" text-xl font-medium">
        Chits Manager
      </Link>
      <div>
        <Button
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
