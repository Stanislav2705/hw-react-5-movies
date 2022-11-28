import { useLocation } from "react-router-dom"
import PropTypes from 'prop-types';
import { LinkItem, ListItem, Title,Span,Img } from "./MovieItem.styled";
import  defaultImage  from '../../Image/default-poster.jpg';

export default function MovieItem({ id, original_title,poster_path,release_date }) {
  const location = useLocation();
  const date = release_date ? <Span>({release_date.slice(0, 4)})</Span> : '';
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const IMG = poster_path ? `${IMG_URL}/${poster_path}` : defaultImage;

  return (
    <ListItem>
      <LinkItem to={`/movies/${id}`} state={{ from: location }}>
        <Img src={IMG} alt='' />
        <Title>
          {original_title} {date}
        </Title>
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
