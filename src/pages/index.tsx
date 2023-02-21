import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Dashboard from "~/components/Dashboard";

const Home: NextPage = () => {
  const session = useSession();
  return (
    <>
      <div className="">
        {session.status === "authenticated" ? (
          <Dashboard />
        ) : (
          <div className=" min-h-[94vh]">Login to continue</div>
        )}
      </div>
    </>
  );
};

export default Home;
