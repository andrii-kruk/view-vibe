import { FC, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("@pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("@pages/MoviesPage/MoviesPage"));
const SeriesPage = lazy(() => import("@pages/SeriesPage/SeriesPage"));
const BookmarkedPage = lazy(() => import("@pages/BookmarkedPage/BookmarkedPage"));

import { Layout } from "@components/index";

const App: FC = () => {
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
