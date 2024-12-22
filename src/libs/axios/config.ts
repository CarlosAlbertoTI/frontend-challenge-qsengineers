import Axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = Axios.create({
  baseURL: " https://cors-anywhere.herokuapp.com/https://cdn-dev.preoday.com/challenge/",
  timeout: 2000,

  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
