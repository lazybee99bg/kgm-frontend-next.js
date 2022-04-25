import React from "react";
import { NextPage } from "next";
import TableCVE from "../src/components/Warning/TableCVE";
import LayoutPage from "../src/common/LayoutPage";
import apiNews from "../src/api/getNews";

const CVEReport: NextPage = (props: any) => {
  console.log(props);

  return (
    <>
      <LayoutPage
        title={
          "Cảnh báo các Lỗ hổng đang bị khai thác | Trung tâm Giám sát an toàn không gian mạng quốc gia - National Cyber Security Center (NCSC)"
        }
      >
        <TableCVE data={props.data} />
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
