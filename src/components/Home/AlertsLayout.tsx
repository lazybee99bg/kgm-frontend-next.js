import React, { useEffect, useState } from "react";
import ApiNew, { BASE_URL_STRAPI } from "../../api/getNews";
import imgDefault from "../../../assets/images/news-security.jpg";
import urlSlug from "url-slug";
import Image from "next/image";
const AlertsLayout = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    ApiNew.get("alerts", {
      params: {
        sort: "createdAt:desc",
        populate: "image",
        fields: "title,createdAt",
        "pagination[limit]": 4,
      },
    }).then((res) => {
      console.log(res.data);
      setNews(res.data);
    });
  }, []);
  const getImageNews = (pathUrlImage: any) => {
    return `${BASE_URL_STRAPI}${pathUrlImage}`;
  };

  return news.length > 0 ? (
    <div className="container my-5">
      <h3 className="mt-10 mb-4 text-left text-4xl font-bold">
        Cảnh báo an toàn thông tin
      </h3>

      <div className="w-100 d-flex">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
          {news.map((item: any, index) => (
            <a
              key={index}
              className="cursor-pointer flex flex-col"
              title={item.attributes.title}
              href={`alert/${urlSlug(item.attributes.title)}.${item.id}`}
            >
              {item?.attributes?.image?.data === null ? (
                <Image
                  className="rounded mb-1"
                  width={300}
                  height={200}
                  alt="Loading.."
                  objectFit="cover"
                  src={imgDefault}
                />
              ) : (
                <Image
                  className="rounded mb-1"
                  width={320}
                  height={200}
                  alt="Loading.."
                  objectFit="cover"
                  src={getImageNews(
                    item?.attributes?.image?.data?.attributes?.url
                  )}
                />
              )}

              <span className="text-sm text-justify font-bold">
                {item.attributes.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default AlertsLayout;
