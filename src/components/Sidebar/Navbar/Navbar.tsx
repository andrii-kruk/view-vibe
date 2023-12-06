import { FC } from "react";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/series">Series</NavLink>
      <NavLink to="/bookmarked">Home</NavLink>
    </nav>
  );
};

export default Navbar;
