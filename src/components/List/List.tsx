import { FC } from "react";

import { Movie } from "src/types";

import { MovieList } from "./List.styled";
import { Card } from "src/components";
import { Link } from "react-router-dom";

type PropsList = {
  items: Movie[];
};

const List: FC<PropsList> = ({ items }) => {
  return (
    <MovieList>
      {items.map((item) => (
        <Link to={`/movie/${item.id}`} key={item.id}>
          <Card />
        </Link>
      ))}
    </MovieList>
  );
};

export default List;
