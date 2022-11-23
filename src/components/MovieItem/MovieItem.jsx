import { useLocation } from "react-router-dom"
import PropTypes from 'prop-types';
import { LinkItem, ListItem, Title } from "./MovieItem.styled";


export default function MovieItem({ id, original_title }) {
  const location = useLocation();

  return (
    <ListItem>
      <LinkItem to={`/movies/${id}`} state={{ from: location }}>
        <Title>{original_title}</Title>
      </LinkItem>
    </ListItem>
  )
}

MovieItem.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title:PropTypes.string.isRequired,
  })
).isRequired;
