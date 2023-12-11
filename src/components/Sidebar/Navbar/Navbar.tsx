import { FC } from "react";
import { Icon, Nav, StyledNavLink } from "./Navbar.styled";

const Navbar: FC = () => {
  return (
    <Nav>
      <StyledNavLink to="/">
        <Icon>
          <use href={"/view-vibe/src/assets/sprite.svg" + "#icon-windows"}></use>
        </Icon>
      </StyledNavLink>
      <StyledNavLink to="/movies">
        <Icon>
          <use href={"/view-vibe/src/assets/sprite.svg" + "#icon-film"}></use>
        </Icon>
      </StyledNavLink>
      <StyledNavLink to="/series">
        <Icon>
          <use href={"/view-vibe/src/assets/sprite.svg" + "#icon-tv"}></use>
        </Icon>
      </StyledNavLink>
      <StyledNavLink to="/bookmarked">
        <Icon>
          <use href={"/view-vibe/src/assets/sprite.svg" + "#icon-bookmark"}></use>
        </Icon>
      </StyledNavLink>
    </Nav>
  );
};

export default Navbar;
