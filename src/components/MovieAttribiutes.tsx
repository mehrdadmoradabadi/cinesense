import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieDetail from "../entities/MovieDetail";
import DefinitionItem from "./DefinitionItem";
import ImdbScore from "./ImdbScore";

interface Props {
  movie: MovieDetail;
}
const MovieAttribiutes = ({ movie }: Props) => {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <DefinitionItem term="Genres">
        {movie.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Companies">
        {movie.production_companies.map((company) => (
          <Text key={company.id}>{company.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Release Date">{movie.release_date}</DefinitionItem>
      <DefinitionItem term="Budget">
        {"$ " + movie.budget.toLocaleString()}
      </DefinitionItem>
      <DefinitionItem term="Revenue">
        {"$ " + movie.revenue.toLocaleString()}
      </DefinitionItem>
      <DefinitionItem term="IMDB">
        <ImdbScore score={movie.vote_average} />
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default MovieAttribiutes;
