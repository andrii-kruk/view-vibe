import { FC, ChangeEvent, useState, useMemo } from "react";

import { debounce } from "src/utils";
import sprite from "src/assets/sprite.svg";

import { Input, SearchIcon, Wrapper } from "./Search.styled";

type PropsSearch = {
  requestByQuery: (query: string) => Promise<void>;
  placeholder: string
};

const Search: FC<PropsSearch> = ({ requestByQuery, placeholder }) => {
  const [query, setQuery] = useState("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setQuery(value);

    searching(value);
  };

  const searching = useMemo(
    () =>
      debounce((query) => {
        requestByQuery(query);
      }, 800),
    []
  );

  return (
    <Wrapper>
      <SearchIcon>
        <use href={sprite + "#icon-search"}></use>
      </SearchIcon>
      <Input type="text" placeholder={placeholder} value={query} onChange={onInputChange} />
    </Wrapper>
  );
};

export default Search;
