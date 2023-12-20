import { FC } from "react";
import { Search } from "src/components";

const MoviesPage: FC = () => {
  return (
    <>
    <section>
        <Search placeholder="Search for movies" />
      </section>
      <section>
        <h2>Movies</h2>

        <ul>{/* Movies */}</ul>
      </section>
    </>
  );
};

export default MoviesPage;
