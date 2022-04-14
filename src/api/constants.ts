import React from "react";

// const { REACT_APP_DEVELOPMENT_URL, REACT_APP_PRODUCTION_URL } = process.env;
const REACT_APP_PRODUCTION_URL = "https://khonggianmang.vn";
const REACT_APP_DEVELOPMENT_URL = "https://staging.khonggianmang.vn";
// ss
const currentUrl = typeof window !== "undefined" ? window.location.href : "";
const developmentMode =
  currentUrl.includes("localhost") ||
  currentUrl.includes("127.0.0.1") ||
  currentUrl.includes("staging");

const BASE_URL_STRAPI = developmentMode
  ? REACT_APP_DEVELOPMENT_URL
  : REACT_APP_PRODUCTION_URL;
// remove in production
if (REACT_APP_PRODUCTION_URL)
  if (currentUrl.includes(REACT_APP_PRODUCTION_URL)) {
    console.log = () => {}; // remove console in production
  }
export default BASE_URL_STRAPI;
