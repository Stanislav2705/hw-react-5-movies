import { reviewsFilm } from "fakeApi";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { List, Text, Title } from "./Reviews.styled";



export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    reviewsFilm(movieId).then(setReviews)
  }, [movieId])

  return (
    <List>
      {reviews?.results.length === 0 ? (
        <Text>We don't have any reviews for this movie.</Text>
      ) : (
        reviews?.results.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <Title>{author}</Title>
              <Text>{content}</Text>
            </li>
          );
        })
      )}
    </List>
  );
}
