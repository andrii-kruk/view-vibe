import { FC, useMemo, useState } from "react";

import { MovieResponse } from "src/types";
import { requestMoviesByName } from "src/http/movies-api";

import SearchBar from "./SearchBar/SearchBar";
import { List } from "src/components";

type PropsSearch = {
  placeholder: string;
};

const Search: FC<PropsSearch> = ({ placeholder }) => {
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
      <SearchBar requestByQuery={searchMovies} placeholder={placeholder} />
      <List items={memoizedSearchedMovies} />
    </>
  );
};

export default Search;
