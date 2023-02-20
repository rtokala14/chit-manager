import { type NextPage } from "next";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const session = useSession();
  return (
    <>
      <div className=" mt-12">
        {session.status === "authenticated"
          ? `Hello  ${session.data?.user.name} `
          : "Login to continue"}
      </div>
    </>
  );
};

export default Home;
