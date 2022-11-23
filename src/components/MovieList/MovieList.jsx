// import { Link, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';

import MovieItem from "components/MovieItem/MovieItem"
import { List } from './MovieList.styled';


export default function MovieList({ movies }) {

  return (
    <>
      <List>
      {movies.map(movie => {
        return <MovieItem key={movie.id} {...movie} />
      })}
      </List>
    </>
  )
}

MovieList.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
      movies:PropTypes.string.isRequired,
  })
).isRequired;
