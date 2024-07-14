// src/App.js
import React, { useState } from 'react';
import MovieList from './components/movielist';
import Filter from './components/filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets...',
      posterURL: 'https://linktoimage.com/inception.jpg',
      rating: 4.8,
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole...',
      posterURL: 'https://linktoimage.com/interstellar.jpg',
      rating: 4.6,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = ({ title, rating }) => {
    let filtered = movies;

    if (title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= rating);
    }

    setFilteredMovies(filtered);
  };

  const handleAddMovie = () => {
    const newMovie = {
      title: 'New Movie',
      description: 'Description of the new movie...',
      posterURL: 'https://linktoimage.com/newmovie.jpg',
      rating: 4.0,
    };
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <button onClick={handleAddMovie}>Add New Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
