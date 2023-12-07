import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Container, Sidebar } from "@components/index";

const Layout: FC = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
