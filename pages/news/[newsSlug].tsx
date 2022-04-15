import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import moment from "moment";
import ApiNew, { BASE_URL_STRAPI } from "../../src/api/getNews";
import LayoutPage from "../../src/common/LayoutPage";
import urlSlug from "url-slug";
import MarkdownLayout from "../../src/common/MarkdownLayout";
import { CalendarIcon } from "@heroicons/react/outline";
import "moment/locale/vi";
import imgDefault from "../../assets/images/news-security.jpg";

moment.locale("vi");
const NewsArticle = () => {
  const router = useRouter();
  const { newsSlug } = router.query;
  const newsId = newsSlug?.slice(newsSlug.indexOf(".") + 1, newsSlug.length);
  const [dataNews, setDataNews] = useState<any>({});
  const [suggestNews, setSuggestNews] = useState<any>([]);
  const getImageNews = (pathUrlImage: any) => {
    return `${BASE_URL_STRAPI}${pathUrlImage}`;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      const responseNews = await ApiNew.get(`news-p/${newsId}`, {
        params: {
          populate: "*",
        },
      });
      // console.log(
      //   responseNews.data.attributes?.image?.data?.attributes?.formats
      //     ?.thumbnail?.url
      // );
      const _dataNews = responseNews.data.attributes;
      setDataNews(_dataNews);
      document.title = _dataNews.title;
      // console.log(_dataNews);
      const responseSuggestNews = await ApiNew.get("news-p", {
        params: {
          populate: "image",
          fields: "title,createdAt",
        },
      });
      setSuggestNews(
        responseSuggestNews.data.filter((item: any) => item.id != newsId)
      );
    })();
  }, [newsId]);
  // console.log(dataNews);
  return (
    <LayoutPage title={dataNews?.title}>
      <div className="container mt-3">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div
            className="lg:col-span-3 col-span-1 bg-white border p-0 mb-3"
            style={{ borderRadius: "0.5rem" }}
          >
            {dataNews.image && (
              <img
                src={getImageNews(dataNews?.image?.data?.attributes?.url)}
                className="w-full mb-2 rounded-t oject-cover"
                height={315}
              />
            )}

            <div className="p-3">
              <h2 className="mt-10 mb-2 text-4xl font-bold">
                {dataNews?.title}
              </h2>
              <span className=" text-sm text-gray-600">
                <CalendarIcon className="w-5 mr-1 inline-block" />
                {moment(dataNews.createdAt).calendar()}
              </span>
              <div className="mt-10 mb-3" style={{ lineHeight: 2 }}>
                <MarkdownLayout>{dataNews.content}</MarkdownLayout>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="mb-6 text-left text-4xl font-bold">Tin liên quan</h3>
            <div className="grid lg:grid-cols-1 grid-cols-2 gap-4">
              {suggestNews.map(
                (item: any, index: React.Key | null | undefined) => (
                  <a
                    key={index}
                    className="flex flex-col px-2 cursor-pointer mb-4"
                    title={item.attributes.title}
                    href={`/news/${urlSlug(item.attributes.title)}.${item.id}`}
                  >
                    {item?.attributes?.image?.data?.attributes?.formats
                      ?.thumbnail?.url && (
                      <img
                        className="h-44 rounded mb-1 object-cover"
                        alt="Loading.."
                        src={getImageNews(
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

export default NewsArticle;
