import Link from "next/link";
import React from "react";
import LayoutPage from "../src/common/LayoutPage";
import AboutUs from "../src/components/Home/AboutUs";

const home = () => {
  return (
    <LayoutPage title="">
      <AboutUs />
    </LayoutPage>
  );
};

export default home;
