import React from "react";
import TableWeekly from "../src/components/Warning/TableWeekly";
import LayoutPage from "../src/common/LayoutPage";
// import "../styles/warning.module.scss";

const WeeklyWarning = () => {
  return (
    <>
      <LayoutPage title="">
        <TableWeekly />
      </LayoutPage>
    </>
  );
};

export default WeeklyWarning;
