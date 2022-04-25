import React from "react";
import ArticlesLayout from "../../src/common/ArticlesLayout";
import apiNews from "../../src/api/getNews";
import urlSlug from "url-slug";

const AlertNews = (props: any) => {
  // console.log(props.id);

  return (
    <div>
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
    alertSlug.lastIndexOf(".")
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
