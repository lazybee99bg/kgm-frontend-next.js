import Link from "next/link";
import React from "react";
import LayoutPage from "../src/common/LayoutPage";
import AboutUs from "../src/components/Home/AboutUs";
import AlertsLayout from "../src/components/Home/AlertsLayout";
import CarouselLayout from "../src/components/Home/CarouselLayout";
import NewsLayout from "../src/components/Home/NewsLayout";

const home = () => {
  // console.log(process.env);
  return (
    <LayoutPage title="">
      <NewsLayout />
      <AlertsLayout />
      <CarouselLayout />
      <AboutUs />
    </LayoutPage>
  );
};

export default home;
