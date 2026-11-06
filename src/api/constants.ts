// const REACT_APP_PRODUCTION_URL = process.env.REACT_APP_PRODUCTION_URL;
// const REACT_APP_DEVELOPMENT_URL = process.env.REACT_APP_DEVELOPMENT_URL;
const REACT_APP_PRODUCTION_URL = "http://localhost:8080";
const REACT_APP_DEVELOPMENT_URL = "http://localhost:8080";

const currentUrl = typeof window !== "undefined" ? window.location.href : "";
const developmentMode =
  currentUrl.includes("localhost") ||
  currentUrl.includes("127.0.0.1") ||
  currentUrl.includes("vercel") ||
  currentUrl.includes("staging");

const URL = developmentMode
  ? REACT_APP_DEVELOPMENT_URL.replace(/^https:\/\//, "https://" + "api-")
  : REACT_APP_PRODUCTION_URL;

// remove in production
if (REACT_APP_PRODUCTION_URL)
  if (currentUrl.includes(REACT_APP_PRODUCTION_URL)) {
    console.log = () => {}; // remove console in production
  }

const BASE_URL_STRAPI = URL;

export default BASE_URL_STRAPI;
