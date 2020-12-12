import './index.css';
import React, { useState, useEffect } from 'react';
import axios from '../../axios.js';
import requests from '../../requests.js';

const poster_base_url = 'https://image.tmdb.org/t/p/original/';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ]);
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <section className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${poster_base_url}${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner--fade-buttom"></div>
    </section>
  );
}

export default Banner;
