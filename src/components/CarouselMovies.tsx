import { GridItem, Image, SimpleGrid } from "@chakra-ui/react";
import MovieDetail from "../entities/MovieDetail";
import DefinitionItem from "./DefinitionItem";
interface Props {
  movie: MovieDetail;
}

const CarouselMovies = ({ movie }: Props) => {
  return (
    <SimpleGrid
      columns={2}
      paddingX={20}
      paddingY={2}
      backgroundColor={"#acacac4d"}
      borderRadius={10}
      justifyItems={"center"}
    >
      <GridItem>
        <DefinitionItem term="Title">{movie.title}</DefinitionItem>
        <DefinitionItem term="Release Date">
          {movie.release_date}
        </DefinitionItem>
      </GridItem>
      <GridItem>
        <Image
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          width={"180px"}
          height={"255px"}
          borderRadius={10}
          objectFit={"contain"}
          overflow={"hidden"}
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default CarouselMovies;
