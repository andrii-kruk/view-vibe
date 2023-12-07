import { FC, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("@pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("@pages/MoviesPage/MoviesPage"));
const SeriesPage = lazy(() => import("@pages/SeriesPage/SeriesPage"));
const BookmarkedPage = lazy(() => import("@pages/BookmarkedPage/BookmarkedPage"));

import { Layout } from "@components/index";

const App: FC = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    body?.setAttribute("data-theme", "dark");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="series" element={<SeriesPage />} />
        <Route path="bookmarked" element={<BookmarkedPage />} />
      </Route>
    </Routes>
  );
};

export default App;
