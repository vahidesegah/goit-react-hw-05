import axios from "axios";

const API_KEY = "da77172919b9bbae173fa92fa4f072d6";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE_URL = "https://image.tmdb.org/t/p";
export { BASE_URL, IMG_BASE_URL };

export const ENDPOINTS = {
  TRENDING_WEEK: "/trending/movie/week",
  TRENDING_DAY: "/trending/movie/day",
  POPULAR_MOVIES: "/movie/popular",
  UPCOMING_MOVIES: "/movie/upcoming",
  MOVIE_DETAILS: (movieId) => `/movie/${movieId}`,
  MOVIE_VIDEOS: (movieId) => `/movie/${movieId}/videos`,
  MOVIE_CREDITS: (movieId) => `/movie/${movieId}/credits`,
  MOVIE_REVIEWS: (movieId) => `/movie/${movieId}/reviews`,
  SEARCH_MOVIES: "/search/movie",
  GENRE_LIST: "/genre/movie/list",
  IMG_W500: "/w500",
  IMG_W780: "/w780",
  IMG_W1280: "/w1280",
  IMG_ORIGINAL: "/original",
};

export async function fetchMovies(baseurl, endpoint, params = {}) {
  try {
    const query = params.query ? { query: params.query } : {};
    const response = await axios.get(`${baseurl}${endpoint}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
        ...params,
        ...query,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
