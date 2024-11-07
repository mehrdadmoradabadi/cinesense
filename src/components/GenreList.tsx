import {
  Button,
  Heading,
  List,
  ListItem,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useMovieQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const setGenreId = useMovieQueryStore((s) => s.setGenreID);
  const { colorMode } = useColorMode();
  const fontColor = colorMode === "light" ? "gray.800" : "gray.100";
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading textAlign={"left"} marginY={5} fontSize={"2xl"}>
        Genres
      </Heading>
      <List textAlign={"start"}>
        {data?.genres.map((genre) => (
          <ListItem key={genre.id} paddingY="4px">
            <Button
              color={genre.id === selectedGenreId ? "red.600" : `${fontColor}`}
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              fontSize={"lg"}
              variant={"link"}
              onClick={() => setGenreId(genre.id)}
            >
              {genre.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
