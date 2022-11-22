import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import { Route, Routes } from "react-router-dom";
import PageContextProvider from "shared/PageContext/PageContext";
import Cast from "./Cast/Cast";
import { Layout } from "./Layout/Layout";
import Reviews from "./Reviews/Reviews";

export const App = () => {
  return (
      <PageContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
        </Route>
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
        </Routes>
      </PageContextProvider>
  );
};
