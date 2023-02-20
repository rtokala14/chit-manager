import Head from "next/head";
import React from "react";

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
        {children}
      </main>
    </>
  );
}

export default MainLayout;
