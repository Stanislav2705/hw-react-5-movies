import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const TREND = "trending/movie/week"
const API_KEY = "cb5d99917b11063d4e60e6f353e2f3b8"

export async function fetchTrendMovies() {
  const result = await axios.get(
    `${BASE_URL}/${TREND}?api_key=${API_KEY}`
  )
  return result.data;
}
