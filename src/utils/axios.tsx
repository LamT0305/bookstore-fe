// api.ts

import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://localhost:7105/api/v1", // Replace this with your API base URL
  timeout: 10000, // Specify the timeout (optional)
  headers: {
    "Content-Type": "application/json",
    // You can add any custom headers here
  },
});

export default axiosInstance;
