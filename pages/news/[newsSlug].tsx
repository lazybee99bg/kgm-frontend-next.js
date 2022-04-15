import React from "react";
import { useRouter } from "next/router";
import ArticlesLayout from "../../src/common/ArticlesLayout";

const NewsArticle = () => {
  const router = useRouter();
  const { newsSlug } = router.query;

  return (
    <div>
      <ArticlesLayout articlesSlug={newsSlug} articlesApi="news-p" />
    </div>
  );
};

export default NewsArticle;
