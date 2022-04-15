import React from "react";
import { NextPage } from "next";
import TableWeekly from "../src/components/Warning/TableWeekly";
import LayoutPage from "../src/common/LayoutPage";
// import "../styles/warning.module.scss";

const WeeklyWarning: NextPage = () => {
  return (
    <>
      <LayoutPage title="">
        <TableWeekly />
      </LayoutPage>
    </>
  );
};

export default WeeklyWarning;
