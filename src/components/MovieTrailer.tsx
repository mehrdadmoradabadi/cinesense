import { useMediaQuery } from "@chakra-ui/react";
import Trailer from "../entities/Trailer";
import useTrailer from "../hooks/useTrailers";
interface Props {
  id: number;
}

const MovieTrailer = ({ id }: Props) => {
  const { data, error, isLoading } = useTrailer(id);
  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");
  const [isMediumScreen] = useMediaQuery("(max-width: 1024px)");
  const width = isSmallerScreen ? "300px" : isMediumScreen ? "500px" : "700px";
  const height = isSmallerScreen ? "200px" : isMediumScreen ? "300px" : "500px";
  if (isLoading) return null;
  if (error) throw error;
  const officialTrailer = data?.results.find(
    (trailer: Trailer) => trailer.type === "Trailer"
  );
  return officialTrailer ? (
    <iframe
      style={{ border: "1px solid black", borderRadius: "10px" }}
      src={"https://www.youtube.com/embed/" + officialTrailer?.key}
      allow="autoplay; encrypted-media; picture-in-picture"
      width={width}
      height={height}
      allowFullScreen
    ></iframe>
  ) : null;
};

export default MovieTrailer;
