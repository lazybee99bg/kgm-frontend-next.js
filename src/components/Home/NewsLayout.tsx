import React, { useEffect, useState } from "react";
import ApiNew, { BASE_URL_STRAPI } from "../../api/getNews";
import urlSlug from "url-slug";
const NewsLayout = () => {
  const [news, setNews] = useState<any>([]);
  const [pinnedNews, setPinnedNews] = useState<any>({});
  useEffect(() => {
    ApiNew.get("news-p", {
      params: {
        sort: "createdAt:desc",
        populate: "image",
        fields: "title,createdAt,pinned,description,category",
        "pagination[limit]": 5,
      },
    }).then((res) => {
      // console.log("here", res.data);
      setPinnedNews(res.data[0]);
      for (let index = 0; index < res.data.length; index++) {
        const element = res.data[index];
        if (element.attributes.pinned) {
          setPinnedNews(element);
          break;
        }
      }

      // res.data.shift();
      // console.log(res.data);
      setNews(res.data);
    });
  }, []);
  const getImageNews = (pathUrlImage: any) => {
    return `${BASE_URL_STRAPI}${pathUrlImage}`;
  };

  return news?.length !== 0 ? (
    <div className="container mt-3">
      <h3 className="mt-10 mb-2 text-left text-4xl font-bold">Tin nổi bật</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <a
          className="mb-2 text-justify cursor-pointer"
          title={pinnedNews?.attributes?.title}
          href={`news/${urlSlug(pinnedNews?.attributes?.title)}.${
            pinnedNews?.id
          }`}
        >
          <img
            className="rounded-t mb-3 w-full h-96 object-cover "
            alt="news"
            src={getImageNews(
              pinnedNews?.attributes?.image?.data?.attributes?.url
            )}
          />
          <h4 className="font-bold ">{pinnedNews?.attributes?.title}</h4>
          <span>{pinnedNews?.attributes?.description}</span>
        </a>
        <div className="grid gap-4 xl:grid-cols-2 grid-cols-1 md:px-2">
          {news.map((item: any, index: React.Key | null | undefined) => (
            <>
              {item !== pinnedNews && (
                <a
                  key={index}
                  className="mb-2 text-justify cursor-pointer"
                  title={item?.attributes.title}
                  href={`news/${urlSlug(item?.attributes.title)}.${item?.id}`}
                >
                  <img
                    className="rounded-lg mb-1 w-96 h-48 object-cover"
                    src={getImageNews(
                      item?.attributes?.image?.data?.attributes?.url
                    )}
                  />
                  <span className="text-sm font-bold">
                    {item?.attributes.title}
                  </span>
                  {/* <p>
                <i class="fas fa-calendar-alt mr-2"></i>
                {moment(item?.attributes.createdAt).calendar()}
              </p> */}
                </a>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default NewsLayout;
