import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function TopBar() {
  const session = useSession();
  return (
    <div className=" fixed top-0 flex w-full items-center justify-between border p-2 px-4">
      <Link href={"/"} className=" text-xl font-medium">
        Chits Manager
      </Link>
      <div>
        <button
          onClick={() =>
            session.status === "authenticated" ? signOut() : signIn()
          }
        >
          {session.status === "authenticated" ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default TopBar;
