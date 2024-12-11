import { React, useState, useEffect } from 'react';
import './App';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import './App.css';

// const API_URL = 'https://www.omdbapi.com?apikey=a72a509f';
const API_URL = 'http://www.omdbapi.com?apikey=b6003d8a';

// const movies1 = [
//   {
//     title: 'Amazing Spider Man 3',
//     year: '2018',
//     type: 'Movie',
//     poster:
//       'https://www.pexels.com/photo/city-light-illuminating-treetops-at-night-18893258/',
//     // poster: 'https://en.wikipedia.org/wiki/File:Azaan_movie_poster.jpg',
//   },
//   {
//     title: 'Spider Man',
//     year: '2008',
//     type: 'Movie',
//     poster:
//       'https://www.pexels.com/photo/city-light-illuminating-treetops-at-night-18893258/',
//     // poster: 'https://en.wikipedia.org/wiki/File:Azaan_movie_poster.jpg',
//   },
// ];

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchMovies('iron Man');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log('==============', data);

    if (data.search) {
      setMovies(data.Search);
    } else {
      console.log('No Data found');
    }
  };

  return (
    <div className='app'>
      <h1>Movie Land</h1>

      <div className='search'>
        <input
          placeholder='enter mast movie name'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>

        <image
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
