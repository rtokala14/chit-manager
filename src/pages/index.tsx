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
          "Login to continue"
        )}
      </div>
    </>
  );
};

export default Home;
