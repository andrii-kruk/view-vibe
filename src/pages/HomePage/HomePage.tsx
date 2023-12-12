import { FC, useState, useMemo } from "react";

import { Search, Trends } from "src/components";

import { requestMoviesByName } from "src/http/movies-api";

import { Section } from "./HomePage.styled";
import { MovieResponse } from "src/types";

const HomePage: FC = () => {
  const [searchedMovies, setSearchedMovies] = useState<MovieResponse[]>([]);

  const searchMovies = async (query: string): Promise<void> => {
    try {
      const data = await requestMoviesByName(query);
      setSearchedMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const memoizedSearchedMovies = useMemo(() => searchedMovies, [searchedMovies]);

  return (
    <>
      <Section>
        <Search requestByQuery={searchMovies} />
      </Section>
      <Section>
        <h2>Trending</h2>
        <Trends />
      </Section>
      <Section>
        <h2>Recommended for you</h2>
        <ul>
          {memoizedSearchedMovies.map((item) => (
            <li key={item.id}>
              <h3>{item.original_title}</h3>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default HomePage;
