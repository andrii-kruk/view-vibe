import { Search } from "src/components";
import { FC } from "react";

const BookmarkedPage: FC = () => {
  return (
    <>
      <section>
        <Search placeholder="Search for bookmarked shows" />
      </section>
      <section>
        <h2>Bookmarked Movies</h2>

        <ul>{/* Bookmarks */}</ul>
      </section>
    </>
  );
};

export default BookmarkedPage;
