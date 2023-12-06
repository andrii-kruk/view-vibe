import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("@pages/MainPage/MainPage"));
const SecondPage = lazy(() => import("@pages/SecondPage/SecondPage"));

import { Layout } from "@components/index";

const App: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="second" element={<SecondPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
