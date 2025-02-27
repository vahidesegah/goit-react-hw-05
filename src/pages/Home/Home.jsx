import { useEffect, useState } from "react";
import MovieCard from "../../components/Movie/MovieCard/MovieCard.jsx";
import { fetchMovies, ENDPOINTS, BASE_URL } from "../../../src/api.js";
import Loading from "../../components/UI/Loading/Loading.jsx";

function Home({ onAddToFavorites, favoriteMovies }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesData = async () => {
      setLoading(true);
      try {
        const data = await fetchMovies(BASE_URL, ENDPOINTS.POPULAR_MOVIES);
        setMovies(data.results);
      } catch (err) {
        setError(err);
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false); // Yükleme bitti
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <MovieCard
          onAddToFavorites={onAddToFavorites}
          favoriteMovies={favoriteMovies}
          movies={movies}
          loading={false}
        />
      )}
    </div>
  );
}

export default Home;
