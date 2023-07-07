import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import ScreenShot from "../entities/ScreenShot";

const useScreenShots = (id: number) => {
  const apiClietn = new APIClient<ScreenShot>(`/movie/${id}/images`);
  return useQuery({
    queryKey: ["screenshot", id],
    queryFn: apiClietn.getAll,
  });
};

export default useScreenShots;
