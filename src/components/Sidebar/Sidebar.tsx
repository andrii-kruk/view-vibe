import { FC } from "react";

import Navbar from "./Navbar/Navbar";

import { Avatar, Header, Logo, Wrapper } from "./Sidebar.styled";
import { Link } from "react-router-dom";


const Sidebar: FC = () => {
  return (
    <Header>
      <Wrapper>
        <Link to="/">
          <Logo width="25" height="20">
            <use href={"/view-vibe/src/assets/sprite.svg" + "#icon_logo"}></use>
          </Logo>
        </Link>
        <Navbar />
        <Avatar to="/bookmarked">{/* <img src=""  /> */}</Avatar>
      </Wrapper>
    </Header>
  );
};

export default Sidebar;
