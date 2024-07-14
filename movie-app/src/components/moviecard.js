// src/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <span>Rating: {movie.rating}</span>
      </div>
    </div>
  );
};

export default MovieCard;
