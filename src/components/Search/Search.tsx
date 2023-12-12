import { FC, ChangeEvent, useState } from "react";

const Search: FC = () => {
  const [query, setQuery] = useState("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  return <input type="text" placeholder="Search" value={query} onChange={onInputChange} />;
};

export default Search;
