import { reviewsFilm } from "fakeApi";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";



export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    reviewsFilm(movieId).then(setReviews)
  }, [movieId])

  return (
    <ul>
      {reviews?.results.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        reviews?.results.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <title>{author}</title>
              <p>{content}</p>
            </li>
          );
        })
      )}
    </ul>
  );
}
