import { Link, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';


export default function MovieItem({ id, original_title }) {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <h3>{original_title}</h3>
      </Link>
    </li>
  )
}

MovieItem.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title:PropTypes.string.isRequired,
  })
).isRequired;
