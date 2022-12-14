import LoadMore from "components/LoadMore/LoadMore";
import MovieList from "components/MovieList/MovieList";
import { fetchTrendMovies } from "fakeApi";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react"
import Loader from "shared/Loader/Loader";
import { PageContext } from "shared/PageContext/PageContext";
import { Title } from "./Home.styled";


export default function Home() {
  const [movies, setMovies] = useState([]);
  const { page } = useContext(PageContext);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await fetchTrendMovies(page);
        setMovies(movies =>
          [...movies, ...data.results]
        );
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [page])




  return (
    <>
      <Title>Trending today</Title>
      {movies && <MovieList movies={movies} />}
      {loading ? <Loader/> : <LoadMore/>}
    </>

  )

}

