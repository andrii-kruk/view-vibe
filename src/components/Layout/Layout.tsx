import { FC } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <header>
        <Link to="/">Main</Link>
        <Link to="/second">Second</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
