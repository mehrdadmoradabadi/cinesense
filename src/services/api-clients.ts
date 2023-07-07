import axios, { AxiosRequestConfig } from "axios";
import ScreenShot from "../entities/ScreenShot";

export interface FetchResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
  genres: T[];
  backdrops: ScreenShot[];
}

const axiosInstance = axios.create({
  method: "GET",
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: "******",
  },
});
class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}
export default APIClient;
