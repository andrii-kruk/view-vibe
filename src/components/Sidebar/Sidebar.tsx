import { FC } from "react";
import Navbar from "./Navbar/Navbar";
import ProfileLink from "./ProfileLink/ProfileLink";

const Sidebar: FC = () => {
  return (
    <aside>
      <Navbar />
      <ProfileLink />
    </aside>
  );
};

export default Sidebar;
