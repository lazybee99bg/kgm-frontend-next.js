import React from "react";
import { NextPage } from "next";
import TableWeekly from "../src/components/Warning/TableWeekly";
import LayoutPage from "../src/common/LayoutPage";
// import "../styles/warning.module.scss";

const WeeklyWarning: NextPage = () => {
  return (
    <>
      <LayoutPage
        title={
          "Cảnh báo An toàn thông tin | Trung tâm Giám sát an toàn không gian mạng quốc gia - National Cyber Security Center (NCSC)"
        }
      >
        <TableWeekly />
      </LayoutPage>
    </>
  );
};

export default WeeklyWarning;
