import axios from "axios";
import BASE_URL_STRAPI from "./constants";

//Token read only
// const TOKEN =
//   "Bearer 078ca1829eb5fa5f8ca488ba139826fc563de727405873420a62c732da06f9f1bfe70553f3ec6141ab32d55abb2e2b592f62965aa3c8fd3bf165845e2d6a03f5716626dc96cc1ccc4065a7b4d3ccee627bb5cc3211dc424a18d26d3f609bd31ed54e38399a8954d60189f51d24c09db08dcd01d8e7aaad46320a2efd87a868f9";
const apiNews = axios.create({
  baseURL: `${BASE_URL_STRAPI}/api`,
});

apiNews.interceptors.response.use(
  (response: { data: any }) => {
    return response.data;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
// apiNews.defaults.headers.common["authorization"] = TOKEN;
export { BASE_URL_STRAPI };
export default apiNews;
