import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
    onFilterChange(titleFilter, ratingFilter);
  };

  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
    onFilterChange(titleFilter, ratingFilter);
  };

  return (
    <div className="filter">
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={titleFilter} onChange={handleTitleChange} />
      <label htmlFor="rating">Rating:</label>
      <input type="number" id="rating" value={ratingFilter} onChange={handleRatingChange} />
    </div>
  );
};

export default Filter;
