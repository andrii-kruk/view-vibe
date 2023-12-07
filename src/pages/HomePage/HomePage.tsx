import { FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <section>
        <h2>Trending</h2>

        <ul>{/* Trends */}</ul>
      </section>
      <section>
        <h2>Recommended for you</h2>
        <ul>{/* Recommends */}</ul>
      </section>
    </>
  );
};

export default HomePage;
