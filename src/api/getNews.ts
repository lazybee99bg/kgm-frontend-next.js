import axios from "axios";
import BASE_URL_STRAPI from "./constants";

//Token read only
// const TOKEN =
const apiNews = axios.create({
  baseURL: `${BASE_URL_STRAPI}/api`,
});
console.log("here", BASE_URL_STRAPI);

apiNews.interceptors.response.use(
  (response: { data: any }) => {
    return response.data;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
// ApiNew.defaults.headers.common["authorization"] = TOKEN;
export { BASE_URL_STRAPI };
export default apiNews;
