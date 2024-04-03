import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="col-sm-4 mb-3">
      <div className="card">
        <img src={movie.posterURL} alt={movie.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.description}</p>
          <span className="badge bg-warning text-dark">Rating: {movie.rating}</span>
        </div>
      </div>
    </div>
  );
};


export default MovieCard;
