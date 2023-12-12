import { FC, ChangeEvent, useState, useMemo } from "react";
import { debounce } from "src/utils";

type PropsSearch = {
  requestByQuery: (query: string) => Promise<void>;
};

const Search: FC<PropsSearch> = ({ requestByQuery }) => {
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

  return <input type="text" placeholder="Search" value={query} onChange={onInputChange} />;
};

export default Search;
