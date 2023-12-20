import { Search } from "@components/index";
import { FC } from "react";

const SeriesPage: FC = () => {
  return (
    <>
        <section>
        <Search placeholder="Search for TV series" />
      </section>
      <section>
        <h2>TV Series</h2>

        <ul>{/* Series */}</ul>
      </section>
    </>
  );
};

export default SeriesPage;
