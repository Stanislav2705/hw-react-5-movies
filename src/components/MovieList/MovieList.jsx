// import { Link, useLocation } from "react-router-dom"
// import PropTypes from 'prop-types';

import MovieItem from "components/MovieItem/MovieItem"


export default function MovieList({ movies }) {

  return (
    <>
      <ul>
      {movies.map(movie => {
        return <MovieItem key={movie.id} {...movie} />
      })}
      </ul>
    </>
  )
}

// MovieList.propTypes = PropTypes.arrayOf(
//   PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title:PropTypes.string.isRequired,
//   })
// ).isRequired;
