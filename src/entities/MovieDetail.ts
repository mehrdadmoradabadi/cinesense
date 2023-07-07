import Genre from "./Genre";
import Companies from "./Companies";
import Countries from "./Countries";

export default interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  homepage: string;
  imdb_id: string;
  production_companies: Companies[];
  production_countries: Countries[];
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
}
