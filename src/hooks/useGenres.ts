import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import ms from "ms";
import Genre from "../entities/Genre";
const apiClient = new APIClient<Genre>("/genre/movie/list");

// const useGenres = () => useData<Genre>("/genre/movie/list");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

export default useGenres;
