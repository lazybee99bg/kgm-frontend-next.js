import React from "react";
import urlSlug from "url-slug";
import { BASE_URL_STRAPI } from "../../api/getNews";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type CellLayoutProps = {
  value: any;
};

const getImageNews = (pathUrlImage: any) => {
  return `${BASE_URL_STRAPI}${pathUrlImage}`;
};

const CellLayout = ({ value }: CellLayoutProps) => {
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

export default CellLayout;
