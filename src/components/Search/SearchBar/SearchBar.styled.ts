import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const SearchIcon = styled.svg`
  width: 24px;
  height: 24px;

  fill: #ffffff;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;

  width: 214px;

  padding: 0;

  color: hsla(0, 0%, 100%);

  font-size: var(--fs-mobile_lg);
  font-weight: var(--fw-light);

  &:placeholder-shown {
    color: hsla(0, 0%, 100%, 0.5);
  }

  @media screen and (min-width: 768px) {
    width: 321px;
    font-size: var(--fs-tablet_lg);
  }
`;
