import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import moment from "moment";
import ApiNew, { BASE_URL_STRAPI } from "../../src/api/getNews";
import LayoutPage from "./LayoutPage";
import urlSlug from "url-slug";
import MarkdownLayout from "./MarkdownLayout";
import { CalendarIcon } from "@heroicons/react/outline";
import "moment/locale/vi";

type ArticlesLayoutProps = {
  articlesSlug: any;
  articlesApi: string;
};
const ArticlesLayout = ({ articlesSlug, articlesApi }: ArticlesLayoutProps) => {
  const articlesId = articlesSlug?.slice(
    articlesSlug.indexOf(".") + 1,
    articlesSlug.length
  );
  const [articles, setArticles] = useState<any>({});
  const [suggestArticles, setSuggestArticles] = useState<any>([]);
  const getArticlesImage = (imageUrl: any) => {
    return `${BASE_URL_STRAPI}${imageUrl}`;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      const responseArticles = await ApiNew.get(
        `${articlesApi}/${articlesId}`,
        {
          params: {
            populate: "*",
          },
        }
      );
      const _articles = responseArticles.data.attributes;
      setArticles(_articles);
      document.title = _articles.title;
      const responseSuggestArticles = await ApiNew.get(`${articlesApi}`, {
        params: {
          populate: "image",
          fields: "title,createdAt",
        },
      });
      setSuggestArticles(
        responseSuggestArticles.data.filter(
          (item: any) => item.id != articlesId
        )
      );
    })();
  }, [articlesId, articlesApi]);

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
              <div className="mt-10 mb-3" style={{ lineHeight: 2 }}>
                <MarkdownLayout>{articles.content}</MarkdownLayout>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="mb-6 text-left text-4xl font-bold">Tin liên quan</h3>
            <div className="grid lg:grid-cols-1 grid-cols-2 gap-4">
              {suggestArticles.map(
                (item: any, index: React.Key | null | undefined) => (
                  <a
                    key={index}
                    className="flex flex-col px-2 cursor-pointer mb-4"
                    title={item.attributes.title}
                    href={`/alert/${urlSlug(item.attributes.title)}.${item.id}`}
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
