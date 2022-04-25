import React from "react";
import ArticlesLayout from "../../src/common/ArticlesLayout";
import apiNews from "../../src/api/getNews";

const AlertNews = (props: any) => {
  return (
    <div>
      <ArticlesLayout
        articlesData={props.articlesData}
        suggestArticlesData={props.suggestArticlesData}
      />
    </div>
  );
};
export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
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
export default AlertNews;
