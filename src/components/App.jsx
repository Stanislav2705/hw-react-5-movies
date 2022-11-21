import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import { Route, Routes } from "react-router-dom";
import PageContextProvider from "shared/PageContext/PageContext";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <>
      <PageContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
          <Route path="/movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
        </Routes>
        </PageContextProvider>
    </>
  );
};
