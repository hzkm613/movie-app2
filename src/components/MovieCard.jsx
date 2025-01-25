import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, coverImg, title, year, summary, genres }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <div>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul>
          {Array.isArray(genres) && genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
