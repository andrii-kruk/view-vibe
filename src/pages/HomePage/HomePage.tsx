import { FC } from "react";
import { Trends } from "src/components";
import { Section } from "./HomePage.styled";

const HomePage: FC = () => {
  return (
    <>
      <Section>
        <h2>Trending</h2>
        <Trends />
      </Section>
      <Section>
        <h2>Recommended for you</h2>
        <ul>{/* Recommends */}</ul>
      </Section>
    </>
  );
};

export default HomePage;
