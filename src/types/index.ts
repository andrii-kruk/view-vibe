export type MovieResponse = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: "movie" | "tv";
  original_language: string;
  original_title: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  first_air_date?: string;
  title: string;
  name?: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  media_type: "movie" | "tv";
  original_title: string;
  original_name?: string;
  release_date: string | undefined;
  first_air_date?: string;
};
