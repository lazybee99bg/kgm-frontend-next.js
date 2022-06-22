import React from "react";
import { NextPage } from "next";
import TableCVE from "../src/components/Warning/TableCVE";
import LayoutPage from "../src/common/LayoutPage";
import apiNews from "../src/api/getNews";

const CVEReport: NextPage = (props: any) => {
  // console.log(props);

  return (
    <>
      <LayoutPage
        title={
          "Cơ sở dữ liệu CVE | Trung tâm Giám sát an toàn không gian mạng quốc gia - National Cyber Security Center (NCSC)"
        }
      >
        <div className="container">
          <h1 className="text-4xl font-semibold pt-10">
            Cảnh báo lỗ hổng CVE nguy hiểm
          </h1>
          <iframe
            className="w-full h-screen rounded-xl drop-shadow-lg pt-4 my-10 bg-white"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0L4Ht-NJZJy5n8kmwM1E4yhYoLbzyxTVq8VErAriAejUCqO3rGbXcREt-kVAhxA/pubhtml?widget=true&chrome=false&headers=false"
          />
        </div>
      </LayoutPage>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await apiNews.get("v1/get-cve-exploit", {
    params: {
      "pagination[limit]": -1,
    },
  });

  return {
    props: { data: res },
    revalidate: 10,
  };
};

export default CVEReport;
