import React, { useState, useEffect } from "react";
// import "../../../styles/warning.module.scss";
import urlSlug from "url-slug";
import Table from "./Table";
import ApiNew, { BASE_URL_STRAPI } from "../../api/getNews";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";

const TitleCell = ({ value }) => {
  return (
    <a
      href={`alert/${urlSlug(value[0])}.${value[1]}`}
      target="_blank"
      rel="noreferrer"
      className="flex md:flex-row flex-col items-center mx-4 my-6 cursor-pointer"
      title={value[0]}
    >
      <div>
        <div className="flex flex-row items-center">
          <div
            className="font-bold text-black text-lg py-3"

            // rel="noopener noreferrer"
          >
            {value[0]}
          </div>
          <span className="text-sm text-gray-500 ml-1">
            {"· "}
            {value[4]}
          </span>
        </div>
        <div className="mr-6">
          <ReactMarkdown
            className="markdown"
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
            components={{
              // Map `h1` (`# heading`) to use `h2`s.
              h1: "h2",
              // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
              p: ({ node, ...props }) => (
                <p
                  style={{
                    // fontSize: "18px",
                    color: "rgb(41, 41, 41)",
                  }}
                  {...props}
                />
              ),
              table: ({ node, ...props }) => (
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "solid 1px black",
                    color: "rgb(41, 41, 41)",
                  }}
                  {...props}
                />
              ),
              thead: ({ node, ...props }) => (
                <thead
                  style={{
                    border: "solid 1px black",
                    backgroundColor: "gray",
                    textAlign: "center",
                  }}
                  {...props}
                />
              ),
              tr: ({ node, ...props }) => (
                <tr
                  style={{
                    border: "solid 1px black",
                    color: "rgb(41, 41, 41)",
                  }}
                  {...props}
                />
              ),
              tbody: ({ node, ...props }) => (
                <tbody
                  style={{
                    border: "solid 1px black",
                    color: "rgb(41, 41, 41)",
                  }}
                  {...props}
                />
              ),
              th: ({ node, ...props }) => (
                <th
                  style={{
                    border: "solid 1px black",
                    color: "rgb(41, 41, 41)",
                  }}
                  {...props}
                />
              ),
              td: ({ node, ...props }) => (
                <td
                  style={{
                    border: "solid 1px black",
                    color: "rgb(41, 41, 41)",
                  }}
                  {...props}
                />
              ),

              img: ({ node, ...props }) => (
                <div className="w-full d-flex justify-content-center">
                  <img {...props} />
                </div>
              ),
            }}
          >
            {value[3]}
          </ReactMarkdown>
        </div>
      </div>
      {value[2] ? (
        // <div className="rounded-sm w-56 h-36 sm:block hidden">
        //   <Image
        //     alt="Loading.."
        //     src={getImageNews(value[2])}
        //     width={"100%"}
        //     height={"100%"}
        //     layout="fill"
        //     objectFit="cover"
        //     loading="lazy"
        //   />
        // </div>
        <img
          className="rounded-sm w-56 h-36 sm:block hidden object-cover"
          alt="Loading.."
          src={getImageNews(value[2])}
        />
      ) : (
        <div className="rounded-full w-40 h-40 sm:block hidden"></div>
      )}
    </a>
  );
};

const getImageNews = (pathUrlImage) => {
  return `${BASE_URL_STRAPI}${pathUrlImage}`;
};

const getDescription = (str) => {
  var result = str;
  result = result.replaceAll("**", "");
  result = result.replaceAll("###", "");

  return result.split(/\s+/).slice(0, 50).join(" ") + "...";
};

const TableWeekly = () => {
  const [news, setNews] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    ApiNew.get("alerts", {
      params: {
        sort: "createdAt:desc",
        populate: "image",
        "pagination[limit]": -1,
      },
    }).then((res) => {
      console.log(res.data);
      const resNews = res.data;
      var mappedWarning = resNews.map((news) => ({
        title: [
          news.attributes.title,
          news.id,
          news?.attributes?.image?.data?.attributes?.url,
          getDescription(news.attributes.content),
          new Date(news.attributes.publishedAt).toLocaleDateString(),
        ],
        typeAlert: news.attributes.typeAlert,
      }));
      setNews(mappedWarning);
      setLoaded(true);
    });
  }, []);

  const columns = [
    {
      Header: "Cảnh báo",
      accessor: "title",
      Cell: TitleCell,
    },
    {
      Header: "",
      accessor: "typeAlert",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="container">
        <h1 className="text-4xl font-bold py-10">Cảnh báo tuần</h1>
        {loaded ? (
          <Table columns={columns} data={news} tableFor="weekly" />
        ) : (
          <div>Đang tải...</div>
        )}
      </div>
    </div>
  );
};

export default TableWeekly;
