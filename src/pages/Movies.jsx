import PropTypes from 'prop-types';
import MovieList from "components/MovieList/MovieList";
import SearchBox from "components/SearchBox/SearchBox";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from 'fakeApi';
import Loader from 'shared/Loader';
import { Notify } from 'notiflix';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

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


  const changeFilter = ({ value }) => {
    setMovies([]);
    setSearchParams({ query: value });
  };


  return (
    <main>
      <SearchBox onSubmit={changeFilter} />
      {movies.length > 0 && (
        <MovieList movies={movies}/>
      )}
      {loading ?? <Loader/>}
    </main>
  )
}

export default Movies

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
