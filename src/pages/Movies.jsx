import PropTypes from 'prop-types';
import MovieList from "components/MovieList/MovieList";
import SearchBox from "components/SearchBox/SearchBox";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from 'fakeApi';
import Loader from 'shared/Loader';
import { Notify } from 'notiflix';


export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("name_film") ?? "";

  useEffect(() => {
    async function getMoviesByQuery() {
      setLoading(true);
      try {
        const data = await searchMovies(query);
        if (data.total_results === 0) {
          return Notify.failure('No such films');
        }
        setMovies(prev => [...prev, ...data.results]);
      } finally {
        setLoading(false);
      }
    }
    if (query) {
      getMoviesByQuery();
    }
  }, [query])


  function changeFilter({ value }) {
    setMovies([]);
    setSearchParams({ name_film: value });
  };


  return (
    <>
      <SearchBox onSubmit={changeFilter} />
      {movies && <MovieList movies={movies} />}
      {loading ?? <Loader/>}
    </>
  )
}


SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
