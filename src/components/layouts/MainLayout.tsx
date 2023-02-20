import Head from "next/head";
import React from "react";
import TopBar from "../TopBar";

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
      <main className="flex min-h-screen w-full flex-col items-center ">
        <TopBar />
        {children}
      </main>
    </>
  );
}

export default MainLayout;
