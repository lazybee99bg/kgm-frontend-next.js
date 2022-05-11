import React from "react";
import ArticlesLayout from "../../src/common/ArticlesLayout";
import apiNews from "../../src/api/getNews";
import urlSlug from "url-slug";
import Head from "next/head";
import { BASE_URL_STRAPI } from "../../src/api/getNews";

const AlertNews = (props: any) => {
  // console.log(props.id);

  return (
    <div>
      <Head>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${props.articlesData.title} | Cổng không gian mạng`}
        />
        <meta
          property="og:description"
          content={` ${props.articlesData.content
            .split(/\s+/)
            .slice(0, 50)
            .join(" ")}`}
        />
        {props.articlesData.image && (
          <meta
            property="og:image"
            content={`${BASE_URL_STRAPI}${props.articlesData?.image?.data?.attributes?.url}`}
          />
        )}
        <meta
          property="og:url"
          content={`${BASE_URL_STRAPI}/alert/${props.articlesData.slug}`}
        />
        <meta property="og:locale" content="vi_VI" />
        <meta property="og:image:alt" content={`${props.articlesData.title}`} />
      </Head>
      <ArticlesLayout
        articlesData={props.articlesData}
        suggestArticlesData={props.suggestArticlesData}
      />
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  const alertSlug = context.params.alertSlug;
  const articlesId = alertSlug?.slice(
    alertSlug.indexOf(".") + 1,
    alertSlug.length
  );

  const responseArticles = await apiNews.get(`alerts/${articlesId}`, {
    params: {
      populate: "*",
    },
  });
  const _articles = responseArticles.data.attributes;
  const responseSuggestArticles = await apiNews.get(`alerts`, {
    params: {
      populate: "image",
      fields: "title,createdAt",
    },
  });
  // const articles: any = await apiNews.get(`alerts`);

  return {
    props: {
      articlesData: _articles,
      suggestArticlesData: responseSuggestArticles.data.filter(
        (item: any) => item.id != articlesId
      ),
      // id: articles.data,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const articles: any = await apiNews.get(`alerts`);

  const paths = articles.data.map((item: any) => {
    return {
      params: {
        alertSlug: `${urlSlug(item.attributes.title)}.${item.id}`,
      },
    };
  });
  return {
    paths: paths, //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
export default AlertNews;
