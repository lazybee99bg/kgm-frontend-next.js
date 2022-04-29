import React, { useEffect, useState } from "react";
import moment from "moment";
import { BASE_URL_STRAPI } from "../../src/api/getNews";
import LayoutPage from "./LayoutPage";
import urlSlug from "url-slug";
import MarkdownLayout from "./MarkdownLayout";
import { CalendarIcon } from "@heroicons/react/outline";
import "moment/locale/vi";
import Link from "next/link";

type ArticlesLayoutProps = {
  articlesData: any;
  suggestArticlesData: any;
};
const ArticlesLayout = ({
  articlesData,
  suggestArticlesData,
}: ArticlesLayoutProps) => {
  const [articles, setArticles] = useState<any>({});
  const [suggestArticles, setSuggestArticles] = useState<any>([]);

  const getArticlesImage = (imageUrl: any) => {
    return `${BASE_URL_STRAPI}${imageUrl}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setArticles(articlesData);
    document.title = articles.title;
    setSuggestArticles(suggestArticlesData);
  }, [articlesData, suggestArticlesData, articles]);

  return (
    <LayoutPage title={articles?.title}>
      <div className="container mt-3">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div
            className="lg:col-span-3 col-span-1 bg-white border p-0 mb-3"
            style={{ borderRadius: "0.5rem" }}
          >
            {articles.image && (
              <img
                src={getArticlesImage(articles?.image?.data?.attributes?.url)}
                className="w-full mb-2 rounded-t oject-cover"
                height={315}
              />
            )}

            <div className="p-3">
              <h2 className="mt-10 mb-2 text-4xl font-bold">
                {articles?.title}
              </h2>
              <span className=" text-sm text-gray-600">
                <CalendarIcon className="w-5 mr-1 inline-block" />
                {moment(articles.createdAt).calendar()}
              </span>
              <div
                className="mt-10 mb-3 overflow-clip"
                style={{ lineHeight: 2 }}
              >
                <MarkdownLayout>{articles.content}</MarkdownLayout>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="mb-6 text-left text-4xl font-bold">Tin liên quan</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-4 max-h-screen overflow-y-scroll">
              {suggestArticles.map(
                (item: any, index: React.Key | null | undefined) => (
                  <Link
                    key={index}
                    href={`${urlSlug(item.attributes.title)}.${item.id}`}
                  >
                    <a
                      className="flex flex-col px-2 cursor-pointer mb-4"
                      title={item.attributes.title}
                    >
                      {item?.attributes?.image?.data?.attributes?.formats
                        ?.thumbnail?.url && (
                        <img
                          className="h-44 rounded mb-1 object-cover"
                          alt="Loading.."
                          src={getArticlesImage(
                            item?.attributes?.image?.data?.attributes?.formats
                              ?.thumbnail?.url
                          )}
                        />
                      )}
                      <span className="font-semibold text-dark">
                        {item.attributes.title}
                      </span>

                      <p className="flex flex-row items-center">
                        <CalendarIcon className="w-5 mr-1 text-gray-600 inline-block" />
                        {moment(item.attributes.createdAt).calendar()}
                      </p>
                    </a>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default ArticlesLayout;
