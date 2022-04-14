import React, { useState, useEffect } from "react";
import Table from "./Table";
import ApiNew from "../../api/getNews";
import CellLayout from "./CellLayout";

const getDescription = (str: any) => {
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
      var mappedWarning = resNews.map((news: any) => ({
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
      Cell: CellLayout,
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
