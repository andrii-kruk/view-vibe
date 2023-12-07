import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("@pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("@pages/MoviesPage/MoviesPage"));
const SeriesPage = lazy(() => import("@pages/SeriesPage/SeriesPage"));
const BookmarkedPage = lazy(() => import("@pages/BookmarkedPage/BookmarkedPage"));

import { Layout, Loader } from "@components/index";

const App: FC = () => {
  return (
    <Suspense fallback={<Loader color="#36d7b7" />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="bookmarked" element={<BookmarkedPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
