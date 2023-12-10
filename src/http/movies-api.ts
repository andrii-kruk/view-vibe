import axios from "axios";

const MOVIE_DB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDAyN2Q0ZjBlZGU2Y2RlMTQ2MmMxMWE4YWZmMzFmZCIsInN1YiI6IjY0NzhhNDE4OTM4MjhlMDBiZjlkMWI0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LPvql0yzJtpHl2REM-0llI41VxeKkvz4iZ9HtwRIrOQ";

// const MOVIE_DB_KEY = "dd027d4f0ede6cde1462c11a8aff31fd";

const $movies_instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { accept: "application/json", Authorization: `Bearer ${MOVIE_DB_TOKEN}` },
});

export const fetchTrending = async () => {
  const { data } = await $movies_instance.get("/trending/all/day");
  console.log('data: ', data);
  return data;
};

export const fetchMovies = async () => {
  const { data } = await $movies_instance.get("/discover/movie");
  return data;
};

export const fetchSeries = async () => {
  const { data } = await $movies_instance.get("/discover/tv");
  return data;
};

export const findById = async (id: string) => {
  const { data } = await $movies_instance.get(`/movie/${id}`);
  return data;
};

export const requestMoviesByName = async (query: string) => {
  const { data } = await $movies_instance.get(`/search/movie`, { params: { query } });
  return data;
};

export const requestSeriesByName = async (query: string) => {
  const { data } = await $movies_instance.get(`/search/tv`, { params: { query } });
  return data;
};
