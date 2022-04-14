import React from "react";
import LayoutPage from "../src/common/LayoutPage";
import Banner from "../src/components/careers/Banner";
import PositionLayout from "../src/components/careers/PositionLayout";

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
