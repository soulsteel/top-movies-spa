import React, { useState, useEffect } from "react";

import MovieTitle from "./MovieTitle";
import Loader from "./Loader";
import Pagination from "./Pagination";

import "./MovieList.css";

function MovieList() {

  const [moviesData, setMoviesData] = useState([]);
  
  useEffect( function getTopMoviesData() {
    const URL = "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/us/movies/top-movies/all/25/non-explicit.json";
    fetch(URL)
    .then(res => res.json())
    .then(json=> setMoviesData(json.feed.results));
  }, []);

  if(moviesData.length === 0) {
    return <Loader />
  }

  let movieList = moviesData.map(infoObj => {
    return <MovieTitle key={infoObj.id} title={infoObj.name} imgSrc={infoObj.artworkUrl100}/>
  });

  return (
    <main>
      <div className="container">
        {movieList}
      </div>  
      <Pagination />
    </main>  
  );
}

export default MovieList;