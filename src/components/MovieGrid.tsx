import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useMovies, { useSearch } from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const MovieGrid = () => {
  const movies = useMovies();
  const searchMovies = useSearch();
  const Skeletons = [1, 2, 3, 4, 5, 6];
  const fetchedMoviesCount =
    movies.data?.pages.reduce(
      (total, page) => total + page.results.length,
      0
    ) || 0;
  return (
    <>
      {(movies.error || searchMovies.error) && (
        <Text>{movies.error?.message}</Text>
      )}
      <InfiniteScroll
        dataLength={fetchedMoviesCount}
        hasMore={!!movies.hasNextPage}
        next={() => movies.fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding={4}
        >
          {(movies.isLoading || searchMovies.isLoading) &&
            Skeletons.map((Skeleton) => (
              <MovieCardContainer key={Skeleton}>
                <MovieCardSkeleton />
              </MovieCardContainer>
            ))}
          {searchMovies.data?.pages &&
          searchMovies.data?.pages[0].total_results > 0
            ? searchMovies.data?.pages.map((page, index) => (
                <Fragment key={index}>
                  {page.results.map((movie) => (
                    <MovieCardContainer key={movie.id}>
                      <MovieCard movie={movie} />
                    </MovieCardContainer>
                  ))}
                </Fragment>
              ))
            : movies.data?.pages.map((page, index) => (
                <Fragment key={index}>
                  {page.results.map((movie) => (
                    <MovieCardContainer key={movie.id}>
                      <MovieCard movie={movie} />
                    </MovieCardContainer>
                  ))}
                </Fragment>
              ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default MovieGrid;
