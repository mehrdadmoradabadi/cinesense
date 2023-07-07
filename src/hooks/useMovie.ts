import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import MovieDetail from "../entities/MovieDetail";

const apiClient = new APIClient<MovieDetail>("/movie");
const useMovie = (id: number) =>
  useQuery({
    queryKey: ["movies", id],
    queryFn: () => apiClient.get(id),
  });

export default useMovie;
