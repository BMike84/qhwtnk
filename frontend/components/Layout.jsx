import React from "react";
import Head from "next/head";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>QHWTNK</title>
      </Head>
      <header className="font-[Poppins]">
        <Navbar />
      </header>
      <main className="scroll-smooth font-[Poppins]">{children}</main>
    </>
  );
};

export default Layout;
