import React from "react";
import urlSlug from "url-slug";
import { BASE_URL_STRAPI } from "../../api/getNews";
import ReactMarkdown from "react-markdown";
import MarkdownLayout from "../../common/MarkdownLayout";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

type CellLayoutProps = {
  value: any;
};

const getImageNews = (pathUrlImage: any) => {
  return `${BASE_URL_STRAPI}${pathUrlImage}`;
};

const CellLayout = ({ value }: CellLayoutProps) => {
  return (
    <Link href={`alert/${urlSlug(value[0])}.${value[1]}`}>
      <a
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
            <MarkdownLayout>{value[3]}</MarkdownLayout>
          </div>
        </div>
        {value[2] ? (
          <img
            className="rounded w-56 h-36 sm:block hidden object-cover"
            alt="Loading.."
            src={getImageNews(value[2])}
          />
        ) : (
          <div className="rounded-full w-40 h-40 sm:block hidden"></div>
        )}
      </a>
    </Link>
  );
};

export default CellLayout;
