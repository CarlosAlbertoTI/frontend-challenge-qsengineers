import Axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = Axios.create({
  baseURL: "https://cdn-dev.preoday.com/challenge",
  timeout: 2000,

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "localhost:5173",
  },
});

export default axiosInstance;
