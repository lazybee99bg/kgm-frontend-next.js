import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import apiNews from "../src/api/getNews";
import LayoutPage from "../src/common/LayoutPage";
import AboutUs from "../src/components/Home/AboutUs";
import AlertsLayout from "../src/components/Home/AlertsLayout";
import CarouselLayout from "../src/components/Home/CarouselLayout";
import NewsLayout from "../src/components/Home/NewsLayout";
import Partners from "../src/components/Home/Partners";

const home: NextPage = (props: any) => {
  return (
    <LayoutPage title="">
      <NewsLayout data={props.dataNews} />
      <AlertsLayout data={props.dataAlerts} />
      <CarouselLayout />
      <AboutUs />
      <Partners />
    </LayoutPage>
  );
};
export const getStaticProps = async () => {
  // const resAlerts = await apiNews.get("alerts", {
  //   params: {
  //     sort: "createdAt:desc",
  //     populate: "image",
  //     fields: "title,createdAt",
  //     "pagination[limit]": 4,
  //   },
  // });

  // const resNews = await apiNews.get("news-p", {
  //   params: {
  //     sort: "createdAt:desc",
  //     populate: "image",
  //     fields: "title,createdAt,pinned,description,category",
  //     "pagination[limit]": 5,
  //   },
  // });

  return {
    // props: { dataNews: resNews.data, dataAlerts: resAlerts.data },
    // revalidate: 10, // In seconds
     // props: { data: res.data },
    // revalidate: 10,
    props: { data: [] }
  };
};

export default home;
