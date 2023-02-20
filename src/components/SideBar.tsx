import { useSession } from "next-auth/react";
import { cn } from "~/utils/twHelper";

function SideBar() {
  const { status } = useSession();
  return (
    <div
      className={cn(
        status === "authenticated" ? "block" : "hidden",
        "fixed left-0 top-14 flex min-h-screen flex-col items-center gap-2 border-r px-2 pt-2"
      )}
    >
      SideBar
    </div>
  );
}

export default SideBar;