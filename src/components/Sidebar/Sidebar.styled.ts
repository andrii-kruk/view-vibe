import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  padding: 20px 16px;
  background-color: #161d2f;

  @media screen and (min-width: 768px) {
    padding: 23px 24px;
    background-color: #10141e;
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
  display: flex;
  align-items: center;
  gap: 79px;

  @media screen and (min-width: 768px) {
    background-color: #161d2f;
    padding: 24px;
    border-radius: 10px;
    justify-content: space-between;
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
`;
