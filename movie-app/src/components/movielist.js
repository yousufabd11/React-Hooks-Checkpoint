// src/MovieList.js
import React from 'react';
import MovieCard from './moviecard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
