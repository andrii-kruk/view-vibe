import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
    flex-direction: column;
  }
`;

export const StyledNavLink = styled(NavLink)`
  width: 16px;
  height: 16px;

  &.active > svg {
    fill: var(--fill-active);
  }

  &:hover > svg {
    fill: var(--fill-active);
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;

  fill: var(--fill);
  stroke: none;

  transition: fill 200ms ease-in-out;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
