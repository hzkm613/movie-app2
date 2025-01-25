import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, coverImg, title, year, summary, genres }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-200 hover:scale-101">
        <img className="w-full rounded-t-lg" src={coverImg} alt={title} />
        <div className="p-5">
          <h2 className="mb-2 text-l font-bold tracking-tight text-gray-900">
            {title.length > 30 ? `${title.slice(0, 30)}...` : title}
          </h2>
          <h3 className="text-sm mb-2">{year}</h3>
          <p className="mb-3 text-xs font-normal text-gray-700">
            {summary.length === 0
              ? "No summary available"
              : summary.length > 80
              ? `${summary.slice(0, 80)}...`
              : summary}
          </p>
          <ul>
            {Array.isArray(genres) && genres.map((g) => <li key={g}>{g}</li>)}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
