import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
type LayoutPageProps = {
  children?: React.ReactNode;
  title?: any;
};
const LayoutPage = ({ children, title }: LayoutPageProps) => {
  return (
    <div>
      <Head>
        <title>{title || "An toàn trên không gian mạng"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default LayoutPage;
