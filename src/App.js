import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyapi.online/api/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="App">
      <h1>Movie Database</h1>
      <MovieList movies={movies} />
    </div>
  );
};

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
};

const MovieItem = ({ movie }) => {
  return (
    <li>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
    </li>
  );
};

export default App;
