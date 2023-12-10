import { FC } from "react";
import { Icon, Nav, StyledNavLink } from "./Navbar.styled";

import sprite from "src/assets/sprite.svg";

const Navbar: FC = () => {
  return (
    <Nav>
      <StyledNavLink to="/">
        <Icon>
          <use href={sprite + "#icon-windows"}></use>
        </Icon>
      </StyledNavLink>
      <StyledNavLink to="/movies">
        <Icon>
          <use href={sprite + "#icon-film"}></use>
        </Icon>
      </StyledNavLink>
      <StyledNavLink to="/series">
        <Icon>
          <use href={sprite + "#icon-tv"}></use>
        </Icon>
      </StyledNavLink>
      <StyledNavLink to="/bookmarked">
        <Icon>
          <use href={sprite + "#icon-bookmark"}></use>
        </Icon>
      </StyledNavLink>
    </Nav>
  );
};

export default Navbar;
