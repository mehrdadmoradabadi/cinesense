import { create } from "zustand";

interface MovieQuery {
  genreId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setSearchText: (searchText: string) => void;
  setGenreID: (genreId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {},
  setSearchText: (searchText) => set(() => ({ movieQuery: { searchText } })),
  setGenreID: (genreId) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, genreId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, sortOrder } })),
}));

export default useMovieQueryStore;
