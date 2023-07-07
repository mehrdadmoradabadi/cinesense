import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-clients";
import ms from "ms";
import useMovieQueryStore from "../store";
import Movie from "../entities/Movie";
const apiClientMovies = new APIClient<Movie>("/discover/movie");
const apiClientSearch = new APIClient<Movie>("/search/movie");

const useMovies = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);

  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClientMovies.getAll({
        params: {
          with_genres: movieQuery.genreId,
          sort_by: movieQuery.sortOrder,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.total_pages > allPages.length + 1
        ? allPages.length + 1
        : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useMovies;

export const useSearch = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["search", movieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClientSearch.getAll({
        params: {
          query: movieQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.total_pages > allPages.length + 1
        ? allPages.length + 1
        : undefined;
    },
  });
};

// export const useSearch = (movieQuery: MovieQuery) =>
//   useData<Movie>(
//     "/search/movie",
//     {
//       params: {
//         query: movieQuery.searchText,
//       },
//     },
//     [movieQuery]
//   );
