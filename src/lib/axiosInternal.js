import axios from "axios";

export const axiosInternal = axios.create({
  baseURL: process.env.NEXT_API_BASE_URL,
  timeout: 150000,
});
