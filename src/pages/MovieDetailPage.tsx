import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

import MovieAttribiutes from "../components/MovieAttribiutes";
import MovieTrailer from "../components/MovieTrailer";
import MovieScreenshots from "../components/MovieScreenshots";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useMovie(parseInt(id || "0"));

  if (isLoading) return <Spinner />;
  if (error || !movie) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem backgroundColor={"#6f6e6e1f"} borderRadius={5}>
        <Box padding={4}>
          <Heading paddingBottom={8}>{movie.title}</Heading>
          <ExpandableText>{movie.overview}</ExpandableText>
          <MovieAttribiutes movie={movie} />
        </Box>
      </GridItem>
      <GridItem>
        <MovieTrailer id={movie.id} />
        <MovieScreenshots id={movie.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default MovieDetailPage;
