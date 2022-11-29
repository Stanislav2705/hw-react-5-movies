import { getMovieDetails } from "fakeApi";
import { useState, useEffect, Suspense } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom";
import defaultImage from '../../Image/default-poster.jpg'
import { IoIosArrowBack } from "react-icons/io";
import Loader from "shared/Loader/Loader";
import { Box, Content, Img, Info, ItemListInfo, LinkEl, LinkListInfo, ListInfo, Text, Title, TitleInfo } from "./MovieDetails.styled";


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
      <LinkEl to={backLink}>
        <IoIosArrowBack/>
        Go back
      </LinkEl>

      {loading && <Loader />}
      <Box>
        <Img src={IMG} width="300" alt={original_title} />
        <Content>
          <Title>
            {original_title} ({date ? date : "NOT TITLE"})
          </Title>
          <Text>User score: {voteAverage}%</Text>
          <Title>Overview</Title>
          <Text>{overview}</Text>
          <Title>Genres</Title>
          <Text>{genre}</Text>
        </Content>
      </Box>
      <Info>
          <TitleInfo>Additional information</TitleInfo>
          <ListInfo>
            <ItemListInfo>
              <LinkListInfo to={castLink} state={{ from: backLink }}>
                Cast
              </LinkListInfo>
            </ItemListInfo>
            <ItemListInfo>
              <LinkListInfo to={reviewsLink} state={{ from: backLink }}>
                Reviews
              </LinkListInfo>
            </ItemListInfo>
          </ListInfo>
        </Info>
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
    </>
  )
}
