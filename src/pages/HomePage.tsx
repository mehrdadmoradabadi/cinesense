import { GridItem, Show, Grid, Box } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import MovieGrid from "../components/MovieGrid";
import MovieHeading from "../components/MovieHeading";
import SortSelector from "../components/SortSelector";
import Carousel from "../components/NewCarousel/Carousel";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside carousel" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"main"}>
        <Box paddingX={4} textAlign={"left"}>
          <MovieHeading />
          <SortSelector />
        </Box>
        <MovieGrid />
      </GridItem>
      <Show above="lg">
        <GridItem area={"carousel"}>
          <Carousel />
          {/* carousel */}
        </GridItem>
        <GridItem area={"aside"} paddingX={"10px"}>
          <GenreList />
        </GridItem>
      </Show>
    </Grid>
  );
};

export default HomePage;
