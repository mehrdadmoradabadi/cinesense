import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import Trailer from "../entities/Trailer";

const useTrailer = (id: number) => {
  const apiClient = new APIClient<Trailer>(`/movie/${id}/videos`);

  return useQuery({
    queryKey: ["trailers", id],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
