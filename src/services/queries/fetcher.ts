import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
});
export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);
