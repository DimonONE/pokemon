import axios from "axios";
import { API_URL } from "../config.js";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      "Access-Control-Allow-Origin": "*",
      Accept: "*/*",
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.log("all request errors cancelled", error);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
