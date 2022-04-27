import React, { useEffect, useState } from "react";
import ApiNew, { BASE_URL_STRAPI } from "../../api/getNews";
import urlSlug from "url-slug";
// import Image from "next/image";
import Image from "../Image";
import Link from "next/link";

type NewsLayoutProps = {
  data: any;
};

const NewsLayout = ({ data }: NewsLayoutProps) => {
  const [news, setNews] = useState<any>([]);
  const [pinnedNews, setPinnedNews] = useState<any>({});
  useEffect(() => {
    setPinnedNews(data[0]);
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.attributes.pinned) {
        setPinnedNews(element);
        break;
      }
    }
    setNews(data);
  }, [data]);
  const getImageNews = (pathUrlImage: any) => {
    return `${BASE_URL_STRAPI}${pathUrlImage}`;
  };

  return news?.length !== 0 ? (
    <div className="container mt-3">
      <h3 className="mt-10 mb-2 text-left text-4xl font-bold">Tin nổi bật</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Link
          href={`news/${urlSlug(pinnedNews?.attributes?.title)}.${
            pinnedNews?.id
          }`}
        >
          <a
            className="mb-2 text-justify cursor-pointer"
            title={pinnedNews?.attributes?.title}
          >
            {/* <img
            className="rounded-t mb-3 w-full h-96 object-cover "
            alt="news"
            src={getImageNews(
              pinnedNews?.attributes?.image?.data?.attributes?.url
            )}
          /> */}
            <Image
              className="rounded-t mb-1"
              width={720}
              height={420}
              alt="Loading.."
              objectFit="cover"
              src={getImageNews(
                pinnedNews?.attributes?.image?.data?.attributes?.url
              )}
            />
            <h4 className="font-bold ">{pinnedNews?.attributes?.title}</h4>
            <span>{pinnedNews?.attributes?.description}</span>
          </a>
        </Link>
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 md:px-2">
          {news.map((item: any, index: React.Key | null | undefined) => (
            <>
              {item !== pinnedNews && (
                <Link
                  key={index}
                  href={`news/${urlSlug(item?.attributes.title)}.${item?.id}`}
                >
                  <a
                    className="flex flex-col mb-2 text-justify cursor-pointer"
                    title={item?.attributes.title}
                  >
                    {/* <img
                    className="rounded mb-1 w-96 h-48 object-cover"
                    src={getImageNews(
                      item?.attributes?.image?.data?.attributes?.url
                    )}
                  /> */}
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
                    <span className="text-sm font-bold">
                      {item?.attributes.title}
                    </span>
                    {/* <p>
                <i class="fas fa-calendar-alt mr-2"></i>
                {moment(item?.attributes.createdAt).calendar()}
              </p> */}
                  </a>
                </Link>
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
