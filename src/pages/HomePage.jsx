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
    <div className="w-screen h-auto p-10 bg-black">
      <h1 className="text-center text-2xl font-bold text-white mb-10">
        Welcome to MovieApp!
      </h1>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
