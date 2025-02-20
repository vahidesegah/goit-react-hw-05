import { Suspense, lazy, useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./ThemeContext";
import Header from "../src/components/Layout/Header/Header.jsx";
import Carousel from "../src/components/UI/Carousel/Carousel.jsx";
import Footer from "../src/components/Layout/Footer/Footer.jsx";
import { Routes, Route } from "react-router";
import { IMG_BASE_URL, ENDPOINTS, BASE_URL, fetchMovies } from "./api.js";

const Home = lazy(() => import("../src/pages/Home/Home.jsx"));
const Movie = lazy(() => import("../src/pages/Movie/Movie.jsx"));
const MovieId = lazy(() =>
  import("../src/components/Layout/MovieId/MovieId.jsx")
);
const NotFound = lazy(() => import("../src/pages/NotFound/NotFound.jsx"));
const MovieCast = lazy(() =>
  import("../src/pages/Movie/MovieCast/MovieCast.jsx")
);
const MovieReview = lazy(() =>
  import("../src/pages/Movie/MovieReview/MovieReview.jsx")
);
const Loading = lazy(() => import("../src/components/UI/Loading/Loading.jsx"));
const MyLibrary = lazy(() => import("../src/pages/MyLibrary/MyLibrary.jsx"));

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [allMovies, setAllMovies] = useState([]);
  const [loadingAllMovies, setLoadingAllMovies] = useState(true);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      setLoadingAllMovies(true);
      try {
        const data = await fetchMovies(BASE_URL, ENDPOINTS.POPULAR_MOVIES);
        setAllMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoadingAllMovies(false);
      }
    };

    fetchAllMovies();
  }, []);

  const handleAddToFavorites = (movieId) => {
    const movieIdString = movieId.toString();

    setFavoriteMovies((prevFavorites) => {
      const isCurrentlyFavorite = prevFavorites.includes(movieIdString);

      let updatedFavorites;
      if (isCurrentlyFavorite) {
        updatedFavorites = prevFavorites.filter((id) => id !== movieIdString);
      } else {
        updatedFavorites = [...prevFavorites, movieIdString];
      }

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };

  const handleRemoveFromFavorites = (movieId) => {
    const movieIdString = movieId.toString();

    setFavoriteMovies((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (id) => id !== movieIdString
      );

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };

  return (
    <ThemeProvider>
      <>
        <Header />
        <Carousel />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  movies={allMovies}
                  loading={loadingAllMovies}
                  onAddToFavorites={handleAddToFavorites}
                  favoriteMovies={favoriteMovies}
                />
              }
            />

            <Route
              path="/library"
              element={
                <MyLibrary
                  favoriteMovies={favoriteMovies}
                  loading={loadingAllMovies}
                  onRemoveFromFavorites={handleRemoveFromFavorites}
                />
              }
            />
            <Route
              path="/movies/:id"
              element={
                <MovieId
                  onAddToFavorites={handleAddToFavorites}
                  favoriteMovies={favoriteMovies}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <Movie
                  movies={allMovies}
                  loading={loadingAllMovies}
                  onAddToFavorites={handleAddToFavorites}
                  favoriteMovies={favoriteMovies}
                />
              }
            />
            <Route
              path="/movies/:id/cast"
              element={
                <MovieCast
                  onAddToFavorites={handleAddToFavorites}
                  favoriteMovies={favoriteMovies}
                />
              }
            />
            <Route
              path="/movies/:id/reviews"
              element={
                <MovieReview
                  onAddToFavorites={handleAddToFavorites}
                  favoriteMovies={favoriteMovies}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
