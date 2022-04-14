import React from "react";
import LayoutPage from "../src/common/LayoutPage";
import Banner from "../src/components/Careers/Banner";
import PositionLayout from "../src/components/Careers/PositionLayout";

const careers = () => {
  return (
    <div>
      <LayoutPage>
        <Banner />
        <PositionLayout />
      </LayoutPage>
    </div>
  );
};

export default careers;
