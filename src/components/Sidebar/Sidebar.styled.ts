import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  padding: 20px 16px;
  background-color: var(--header_bg-color);

  @media screen and (min-width: 768px) {
    padding: 24px;
    background-color: var(--bg-color);
  }

  @media screen and (min-width: 1440px) {
    padding: 32px;
  }
`;

export const Logo = styled.svg`
  width: 25px;
  height: 20px;

  fill: #fc4747;
  stroke: none;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 25px;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    background-color: var(--header_bg-color);
    padding: 24px;
    border-radius: 10px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 38px;
    flex-direction: column;
    justify-content: unset;
    height: calc(100vh - 64px);
    gap: 75px;
  }
`;

export const Avatar = styled(Link)`
  background-color: #ffffff;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    width: 40px;
    height: 40px;

    bottom: 32px;
    left: 50%;

    transform: translateX(-50%);
  }
`;
