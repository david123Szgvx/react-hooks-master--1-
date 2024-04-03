import React, { useState } from 'react';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import Filter from './Filter';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialMovies = [
  {
    title: 'The Shawshank Redemption',
    description: 'A tale of hope and redemption in a Maine prison.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
    rating: 5,
  },
  {
    title: 'The Godfather',
    description: 'The story of the Corleone family under patriarch Vito Corleone.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
    rating: 5,
  },
  {
    title: 'The Dark Knight',
    description: 'When the mentally disturbed Joker wreaks havoc on Gotham City, Batman must face him.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    rating: 4.8,
  },
  {
    title: 'Pulp Fiction',
    description: 'A series of interrelated stories of crime, violence, and redemption.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_.jpg',
    rating: 4.6,
  },
];

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
    
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilterChange = (title, rating) => {
    setTitleFilter(title);
    setRatingFilter(rating);
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === '' || movie.rating >= rating)
      );
    });
    setFilteredMovies(filtered);
  };

  return (
    <div className="container">
      <h1>Shegs Movie List</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
  
};

export default App;
