import Link from "next/link";
import React from "react";
import LayoutPage from "../src/common/LayoutPage";
import AboutUs from "../src/components/Home/AboutUs";
import CarouselLayout from "../src/components/Home/CarouselLayout";

const home = () => {
  // console.log(process.env);
  return (
    <LayoutPage title="">
      <CarouselLayout />
      <AboutUs />
    </LayoutPage>
  );
};

export default home;
