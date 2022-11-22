import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const TREND = "trending/movie/week"
const SEARCH = "search/movie"
const API_KEY = "cb5d99917b11063d4e60e6f353e2f3b8"

export async function fetchTrendMovies(page) {
  const result = await axios.get(
    `${BASE_URL}/${TREND}?api_key=${API_KEY}&page=${page}`
  )
  return result.data;
}

export async function searchMovies(query) {
  const result = await axios.get(
    `${BASE_URL}/${SEARCH}?api_key=${API_KEY}&language=en-US&query=${query}`
  )
  return result.data;
}

export async function getMovieDetails(id) {
  const result = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  )
  return result.data
}

export async function castActorsFilm(id) {
  try {
    const result = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  )
  return result.data;
  } catch (error) {
    console.log(error)
  }

}

export async function reviewsFilm(id) {
  try {
    const result = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    )
    return result.data;
  } catch (error) {
    console.log(error.message)
  }
}
