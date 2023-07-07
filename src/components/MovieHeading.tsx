import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useMovieQueryStore from "../store";

const MovieHeading = () => {
  const genreID = useMovieQueryStore((s) => s.movieQuery.genreId);
  const { data: genres } = useGenres();
  const genre = genres?.genres.find((g) => g.id === genreID);
  const heading = `${genre?.name || ""} Movies`;
  return (
    <Heading as="h1" marginY={4}>
      {heading}
    </Heading>
  );
};

export default MovieHeading;
