import Head from "next/head";
import React from "react";
import TopBar from "../TopBar";
import SideBar from "../SideBar";

function MainLayout({ children }: { children: React.ReactNode }) {
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
      <main className="flex min-h-screen w-full flex-col items-center bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300 ">
        <TopBar />
        <SideBar />
        {children}
      </main>
    </>
  );
}

export default MainLayout;
