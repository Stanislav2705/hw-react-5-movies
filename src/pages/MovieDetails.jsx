import { getMovieDetails } from "fakeApi";
import { useState, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom";


export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [loading, setloading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();


  useEffect(() => {
    async function movieById() {
      setloading(true);
      try {
        const data = await getMovieDetails(movieId);
        setMovie({ ...data });
      } catch (error) {
        console.log(error.message);
      } finally {
        setloading(false);
      }
    }
    movieById();
  }, [movieId]);

  const isCast = location.pathname.includes('cast');
  const castLink = isCast ? `/movies/${movieId}` : 'cast';
  const isReviews = location.pathname.includes('reviews');
  const reviewsLink = isReviews ? `/movies/${movieId}` : 'reviews';


  return (
    <div>MovieDetails</div>
  )
}
