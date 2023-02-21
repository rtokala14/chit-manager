import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import NewChitForm from "~/components/NewChitForm";

async function Create() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "unauthenticated") {
    await router.push("/");
    return <div></div>;
  }
  return (
    <div className=" flex flex-col items-start pl-2 pt-2">
      <h2 className=" mb-3 border-b border-b-slate-400 text-2xl font-bold dark:border-b-slate-500">
        Create a new Chit
      </h2>
      <NewChitForm />
    </div>
  );
}

export default Create;
