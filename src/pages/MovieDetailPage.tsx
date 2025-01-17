import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import {
  Box,
  GridItem,
  Heading,
  Spinner,
  useColorMode,
  Flex,
  Show,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import MovieAttribiutes from "../components/MovieAttribiutes";
import MovieTrailer from "../components/MovieTrailer";
import Navbar from "../components/Navbar";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useMovie(parseInt(id || "0"));
  const { colorMode } = useColorMode();

  const bgColor = colorMode === "light" ? " #fffce5" : "black";

  if (isLoading) return <Spinner />;
  if (error || !movie) throw error;

  return (
    <>
      <Box
        position="relative"
        width="100%"
        height="100%"
        backgroundColor={bgColor}
        color={colorMode === "light" ? "gray.800" : "gray.200"}
        overflow="hidden"
      >
        <Box zIndex={2} position={"relative"}>
          <Navbar />
        </Box>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          paddingX="40px"
          width={{ base: "100%", lg: "50%" }}
          height="100%"
          zIndex={2}
          position="relative"
          backgroundColor={bgColor}
        >
          <GridItem
            position="relative"
            backgroundColor={bgColor}
            borderRadius={5}
            overflow="hidden"
          >
            <Box position="relative" zIndex={2} padding={1}>
              <Heading paddingBottom={2}>{movie.title}</Heading>
              <MovieTrailer id={movie.id} />
              <ExpandableText>{movie.overview}</ExpandableText>
              <MovieAttribiutes movie={movie} />
            </Box>
          </GridItem>
        </Flex>
        <Show above="lg">
          <Box
            position="absolute"
            top={0}
            right={0}
            width="50%"
            height="100%"
            zIndex={1}
            backgroundImage={`url(https://image.tmdb.org/t/p/original/${movie.poster_path})`}
            backgroundSize="cover"
            _before={{
              content: `""`,
              position: "absolute",
              top: 0,
              width: "100%",
              height: "100%",
              bgGradient: `linear(to-r, ${bgColor}, transparent)`,
            }}
          />
        </Show>
      </Box>
    </>
  );
};

export default MovieDetailPage;
