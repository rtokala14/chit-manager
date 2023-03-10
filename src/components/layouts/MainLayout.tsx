import Head from "next/head";
import React from "react";
import TopBar from "../TopBar";
import SideBar from "../SideBar";
import { useSession } from "next-auth/react";

function MainLayout({ children }: { children: React.ReactNode }) {
  const session = useSession();

  if (session.status === "loading") {
    return (
      <div className=" h-screen w-screen bg-slate-100 dark:bg-slate-900"></div>
    );
  }
  return (
    <>
      <Head>
        <title>Chits Manager</title>
        <meta
          name="description"
          content="A web app to manage chit funds by Rohit Tokala"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="z-40 flex min-h-[95vh] w-full flex-col items-start overflow-hidden bg-slate-100 font-serif text-slate-700 dark:bg-slate-900 dark:text-slate-300 ">
        <TopBar />
        <div className=" flex w-full ">
          <SideBar />
          {children}
        </div>
      </main>
    </>
  );
}

export default MainLayout;
