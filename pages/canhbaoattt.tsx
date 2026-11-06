import React from "react";
import { NextPage } from "next";
import TableWeekly from "../src/components/Warning/TableWeekly";
import LayoutPage from "../src/common/LayoutPage";
import apiNews from "../src/api/getNews";

const WeeklyWarning: NextPage = (props: any) => {
  return (
    <>
      <LayoutPage
        title={
          "Cảnh báo tuần | Trung tâm Giám sát an toàn không gian mạng quốc gia - National Cyber Security Center (NCSC)"
        }
      >
        <TableWeekly data={props.data} />
      </LayoutPage>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await apiNews.get("alerts", {
    params: {
      sort: "createdAt:desc",
      populate: "image",
      "pagination[limit]": -1,
    },
  });

  return {
    // props: { data: res.data },
    // revalidate: 10,
    props: { data: [] }
  };
};

export default WeeklyWarning;
