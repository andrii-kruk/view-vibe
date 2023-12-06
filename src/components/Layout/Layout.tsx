import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@components/index";

const Layout: FC = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
