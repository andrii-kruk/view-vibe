import { FC, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("src/pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("src/pages/MoviesPage/MoviesPage"));
const SeriesPage = lazy(() => import("src/pages/SeriesPage/SeriesPage"));
const BookmarkedPage = lazy(() => import("src/pages/BookmarkedPage/BookmarkedPage"));

import { Layout } from "src/components";

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
