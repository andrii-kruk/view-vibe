import { FC } from "react";

import { Search, Trends } from "src/components";

import { Section } from "./HomePage.styled";

const HomePage: FC = () => {
  return (
    <>
      <Section>
        <Search placeholder="Search for movies or TV series" />
      </Section>

      <Section>
        <h2>Trending</h2>
        <Trends />
      </Section>

      <Section>
        <h2>Recommended for you</h2>
        {/* <ul>
        </ul> */}
      </Section>
    </>
  );
};

export default HomePage;
