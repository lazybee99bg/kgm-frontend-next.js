import React from "react";
import { useRouter } from "next/router";
import ArticlesLayout from "../../src/common/ArticlesLayout";

const AlertNews = () => {
  const router = useRouter();
  const { alertSlug } = router.query;

  return (
    <div>
      <ArticlesLayout articlesSlug={alertSlug} articlesApi="alerts" />
    </div>
  );
};

export default AlertNews;
