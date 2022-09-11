import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? "Food Order - " + title : "Food Order App"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
