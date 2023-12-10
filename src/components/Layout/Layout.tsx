import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Loader, Sidebar } from "src/components";

const Layout: FC = () => {
  return (
    <>
      <Sidebar />
      <main>
      <Suspense fallback={<Loader color="#36d7b7" />}>
       <Container>
          <Outlet />
        </Container>
       </Suspense>
      </main>
    </>
  );
};

export default Layout;
