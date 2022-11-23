import MovieList from "components/MovieList/MovieList";
import SearchBox from "components/SearchBox/SearchBox";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from 'fakeApi';
import Loader from 'shared/Loader/Loader';
import { Notify } from 'notiflix';
import LoadMore from 'components/LoadMore/LoadMore';
import { useContext } from 'react';
import { PageContext } from 'shared/PageContext/PageContext';


export default function Movies() {
  const [movies, setMovies] = useState([]);
  const { page } = useContext(PageContext);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const nameMovie = searchParams.get("name_film") ?? "";

  useEffect(() => {
    async function getMoviesByQuery() {
      setLoading(true);
      try {
        const data = await searchMovies(nameMovie,page);
        if (data.total_results === 0) {
          return Notify.failure('No such films');
        }
        setMovies(prev => [...prev, ...data.results]);
        const totalPages = Math.ceil(data.total_results / 20);
        setTotalPages(totalPages);
        if (page >= totalPages) {
          Notify.warning(
            "We're sorry, but you've reached the end of search results."
          )
        }
      } finally {
        setLoading(false);
      }
    }
    if (nameMovie) {
      getMoviesByQuery();
    }
  }, [nameMovie,page])


  function handleSubmit({ movieName }) {
    setMovies([]);
    setSearchParams({ name_film: movieName });
  };

  const isFilms = movies?.length !== 0;
  const endList = page < totalPages;


  return (
    <>
      <SearchBox submit={handleSubmit} />
      {movies && <MovieList movies={movies} />}
      {loading ? <Loader/> : endList && isFilms && <LoadMore/>}
    </>
  )
}
