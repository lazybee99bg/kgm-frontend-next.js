import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { BASE_URL_STRAPI } from "../../src/api/getNews";

type LayoutPageProps = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
};
const LayoutPage = ({
  children,
  title,
  description,
  image,
}: LayoutPageProps) => {
  const router = useRouter();
  // console.log(description);

  return (
    <div>
      <Head>
        <title>
          {title ||
            "An toàn trên không gian mạng - khonggianmang.vn - Trung tâm Giám sát an toàn không gian mạng quốc gia - National Cyber Security Center (NCSC)"}
        </title>
        <meta name="description" content={` ${description}`} />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={` ${description}`} />
        <meta
          property="og:url"
          content={`https://khonggianmang.vn/${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${image}`} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content={`${title}`} />
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
