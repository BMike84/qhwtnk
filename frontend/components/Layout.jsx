import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>QHWTNK</title>
      </Head>
      <header>{/* <Navbar /> */}</header>
      <main className="scroll-smooth">{children}</main>
    </>
  );
};

export default Layout;
