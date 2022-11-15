import MovieList from "components/MovieList/MovieList";
import { fetchTrendMovies } from "fakeApi";
import { useEffect } from "react";
import { useState } from "react"


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchTrendMovies();
        setMovies((prevMovie) => {
          return [...prevMovie, ...data]
        })
      } catch (error) {
        setError(error)
      }
    }
    fetchMovies();
  }, [])


  const isMovies = Boolean(movies.length)

  return (
    <main>
      <h1>Trending today</h1>
      {error && <p>Loading false</p>}
      {isMovies > 0 && <MovieList movies={movies} />}
    </main>

  )

}

