import styled from "styled-components";

const Container = styled.div`
  position: relative;

  width: 343px;
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: 768px) {
    width: 720px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    margin: 0;
    padding: 0 4px;
  }
`;

export default Container;
