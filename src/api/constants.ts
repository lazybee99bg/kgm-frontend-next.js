// const REACT_APP_PRODUCTION_URL = process.env.REACT_APP_PRODUCTION_URL;
// const REACT_APP_DEVELOPMENT_URL = process.env.REACT_APP_DEVELOPMENT_URL;
const REACT_APP_PRODUCTION_URL = "https://khonggianmang.vn";
const REACT_APP_DEVELOPMENT_URL = "https://staging.khonggianmang.vn";

const currentUrl = typeof window !== "undefined" ? window.location.href : "";
const developmentMode =
  currentUrl.includes("localhost") ||
  currentUrl.includes("127.0.0.1") ||
  currentUrl.includes("staging");

const URL = developmentMode
  ? REACT_APP_DEVELOPMENT_URL
  : REACT_APP_PRODUCTION_URL;

// remove in production
if (REACT_APP_PRODUCTION_URL)
  if (currentUrl.includes(REACT_APP_PRODUCTION_URL)) {
    console.log = () => {}; // remove console in production
  }

const BASE_URL_STRAPI = URL.includes("staging")
  ? URL.replace(/^https:\/\//, "https://" + "api-")
  : URL.replace(/^https:\/\//, "https://" + "api.");

export default BASE_URL_STRAPI;
