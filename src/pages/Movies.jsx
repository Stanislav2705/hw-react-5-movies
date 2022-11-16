import PropTypes from 'prop-types';
import MovieList from "components/MovieList/MovieList";
import SearchBox from "components/SearchBox/SearchBox";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from 'fakeApi';


const Movies = () => {
  const [error, setError] = useState(null)
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) {
      return
    };

    searchMovies(query)
      .then(data => {
        setMovies(data.results);
        if (data.results.length === 0) {
          toast.info('No movies with such request!')
        }
      }).catch(error => {
        setError(error);
        setMovies([])
      })
  }, [query]);

  const changeFilter = value => {
    setSearchParams({ query: value.toLowerCase() });
  };


  return (
    <main>
      <SearchBox onSubmit={changeFilter} />
      {error && <p>Something go wrong. Try again</p>}
      {movies.length > 0 && (
        <MovieList movies={movies}/>
      )}
    </main>
  )
}

export default Movies

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
