import { ChangeEvent, FC, useMemo, useState } from "react";
import sprite from "src/assets/sprite.svg";
import debounce from "lodash.debounce";
import { Input, SearchIcon, Wrapper } from "./SearchBar.styled";

type PropsSearch = {
  requestByQuery: (query: string) => Promise<void>;
  placeholder: string;
};

const SearchBar: FC<PropsSearch> = ({ requestByQuery, placeholder }) => {
  const [query, setQuery] = useState("");

  const debouncedSearchMovies = useMemo(() => debounce(requestByQuery, 700), [requestByQuery]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    debouncedSearchMovies(inputValue);
  };

  return (
    <Wrapper>
      <SearchIcon>
        <use href={sprite + "#icon-search"}></use>
      </SearchIcon>
      <Input type="text" placeholder={placeholder} value={query} onChange={onInputChange} />
    </Wrapper>
  );
};

export default SearchBar;
