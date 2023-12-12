import styled from "styled-components";

export const TrendsList = styled.ul`
  display: flex;
  margin: 0;
  width: 100%;
  gap: 16px;
  padding-bottom: 6px;
  overflow: auto;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: calc(100vw - (172px + 8px));
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
