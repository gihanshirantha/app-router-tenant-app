import axios from "axios";

const BaseURL = process.env.BASE_URL;

const axiosInstance = axios.create({
    baseURL: BaseURL, 
  });

export default axiosInstance;