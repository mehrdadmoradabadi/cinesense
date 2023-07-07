import Movie from "../entities/Movie";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import ImdbScore from "./ImdbScore";
import { Link } from "react-router-dom";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <CardBody>
        <Heading fontSize={"2xl"}>
          <Link to={"/movies/" + movie.id}>{movie.title}</Link>
        </Heading>
        <HStack justifyContent={"flex-end"} marginBottom={3}>
          <Heading fontSize={"5xs"}>IMDB </Heading>
          <ImdbScore score={movie.vote_average} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
