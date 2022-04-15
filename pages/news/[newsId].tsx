import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useParams } from "react-router-dom";
import moment from "moment";
import ApiNew, { BASE_URL_STRAPI } from "../../src/api/getNews";
import LayoutPage from "../../src/common/LayoutPage";
import urlSlug from "url-slug";
import MarkdownLayout from "../../src/common/MarkdownLayout";

const DetailNews = () => {
  const router = useRouter();
  const { newsId } = router.query;
  console.log(newsId);
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
      console.log(
        responseNews.data.attributes?.image?.data?.attributes?.formats
          ?.thumbnail?.url
      );
      const _dataNews = responseNews.data.attributes;
      setDataNews(_dataNews);
      document.title = _dataNews.title;
      console.log(_dataNews);
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
  console.log(dataNews);
  return (
    <LayoutPage>
      <div className="container mt-3">
        <div className="d-flex flex-row row">
          <div
            className="col-lg-9 bg-white border p-0 mb-3"
            style={{ borderRadius: "0.5rem" }}
          >
            {dataNews.image && (
              <img
                src={getImageNews(dataNews?.image?.data?.attributes?.url)}
                className="w-100 mb-2"
                height={315}
                style={{
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                  objectFit: "cover",
                }}
              />
            )}

            <div className="p-3">
              <h2 className="mb-1 font-weight-bold">{dataNews?.title}</h2>
              <span>
                <i className="fas fa-calendar-alt mr-2"></i>
                {moment(dataNews.createdAt).calendar()}
              </span>
              <div className="my-3" style={{ lineHeight: 2 }}>
                <MarkdownLayout>{dataNews.content}</MarkdownLayout>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <h3>Tin liên quan</h3>
            {suggestNews.map(
              (item: any, index: React.Key | null | undefined) => (
                <a
                  key={index}
                  className="w-100 px-2 cursor-pointer mb-4"
                  title={item.attributes.title}
                  href={`../news/${urlSlug(item.attributes.title)}.${item.id}`}
                >
                  <img
                    height={120}
                    className="rounded mb-1 w-100"
                    src={getImageNews(
                      item?.attributes?.image?.data?.attributes?.formats
                        ?.thumbnail?.url
                    )}
                  />
                  <span className="font-weight-bold text-dark">
                    {item.attributes.title}
                  </span>

                  <p>
                    <i className="fas fa-calendar-alt mr-2"></i>
                    {moment(item.attributes.createdAt).calendar()}
                  </p>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default DetailNews;
