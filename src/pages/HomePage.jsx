import React from "react";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
