import React from "react";
import apiNews from "../../src/api/getNews";
import ArticlesLayout from "../../src/common/ArticlesLayout";
import { BASE_URL_STRAPI } from "../../src/api/getNews";

import urlSlug from "url-slug";
import Head from "next/head";

const NewsArticle = (props: any) => {
  return (
    <div>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${props.articlesData.title}`} />
        <meta
          property="og:description"
          content={` ${props.articlesData.content
            .replaceAll("**", "")
            .replaceAll("###", "")
            .split(/\s+/)
            .slice(0, 50)
            .join(" ")}`}
        />
        <meta
          property="og:image"
          content={`${BASE_URL_STRAPI}${props.articlesData.image.data.attributes.url}`}
        />
      </Head>
      <ArticlesLayout
        articlesData={props.articlesData}
        suggestArticlesData={props.suggestArticlesData}
      />
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  const newsSlug = context.params.newsSlug;
  const articlesId = newsSlug?.slice(
    newsSlug.indexOf(".") + 1,
    newsSlug.length
  );

  const responseArticles = await apiNews.get(`news-p/${articlesId}`, {
    params: {
      populate: "*",
    },
  });
  const _articles = responseArticles.data.attributes;
  const responseSuggestArticles = await apiNews.get(`news-p`, {
    params: {
      populate: "image",
      fields: "title,createdAt",
    },
  });

  return {
    props: {
      articlesData: _articles,
      suggestArticlesData: responseSuggestArticles.data.filter(
        (item: any) => item.id != articlesId
      ),
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const articles: any = await apiNews.get(`news-p`);

  const paths = articles.data.map((item: any) => {
    return {
      params: {
        newsSlug: `${urlSlug(item.attributes.title)}.${item.id}`,
      },
    };
  });
  return {
    paths: paths, //indicates page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export default NewsArticle;
