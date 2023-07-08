import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import MovieDetail from "../entities/MovieDetail";
import ms from "ms";

const apiClient = new APIClient<MovieDetail>("/movie/upcoming");
const useUpcommingMovies = () =>
  useQuery({
    queryKey: ["movies"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

export default useUpcommingMovies;
