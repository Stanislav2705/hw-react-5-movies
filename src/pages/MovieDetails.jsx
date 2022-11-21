import { getMovieDetails } from "fakeApi";
import { useState, useEffect, Suspense } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import defaultImage from '../Image/default-poster.jpg'
import { IoIosArrowBack } from "react-icons/io";
import Loader from "shared/Loader";


export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [loading, setloading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

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

  const { original_title, genres, overview, poster_path, release_date, vote_average } = movie;
  const genre = genres?.map(a => a.name).join(', ');
  const voteAverage = Math.ceil(vote_average * 10);
  const date = release_date?.slice(0, 4);
  const backLink = location.state?.from ?? '/movies';
  const IMG = poster_path ? `${IMG_URL}/${poster_path}` : defaultImage;

  return (
    <>
      <Link to={backLink}>
        <IoIosArrowBack/>
        Go back
      </Link>

      {loading && <Loader />}
      <div>
        <img src={IMG} width="300" alt={original_title} />
        <div>
          <title>
            {original_title} ({date ? date : "NOT TITLE"})
          </title>
          <p>User score: {voteAverage}%</p>
          <p>Overview</p>
          <p>{overview}</p>
          <p>Genres</p>
          <p>{genre}</p>
        </div>
        </div>
        <div>
          <title>Additional information</title>
          <ul>
            <li>
              <Link to={castLink} state={{ from: backLink }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to={reviewsLink} state={{ from: backLink }}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
    </>
  )
}
