import { FC } from "react";

import { Movie } from "src/types";

import { MovieList } from "./List.styled";
import { Card } from "src/components";
import { Link } from "react-router-dom";

type PropsList = {
  items: Movie[];
};

const List: FC<PropsList> = ({ items }) => {
  console.log("items: ", items);
  return (
    <MovieList>
      {items.map(
        ({ id, adult, backdrop_path, media_type, original_name, original_title, release_date, first_air_date }) => (
          <Link to={`/movie/${id}`} key={id}>
            <Card
              adult={adult}
              backdrop_path={backdrop_path}
              id={id}
              media_type={media_type ? media_type : "Unknown"}
              original_title={original_name || original_title}
              release_date={release_date || first_air_date || "Unknown"}
            />
          </Link>
        )
      )}
    </MovieList>
  );
};

export default List;
