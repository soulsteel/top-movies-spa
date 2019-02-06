import React, { useState, useEffect } from "react";

import MovieTitle from "./MovieTitle";

function MovieList() {
  const [title, setTitle] = useState(null);
  const [moviesData, setMoviesData] = useState(null);
  
  useEffect( function getTopMoviesData() {
    const URL = "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/us/movies/top-movies/all/25/non-explicit.json";
    fetch(URL)
    .then(res => res.json())
    .then(json=> setMoviesData(json.feed.results))
  });

  return (
    <MovieTitle 
      title="Bohemian Rhapsody" 
      imgSrc="https://is4-ssl.mzstatic.com/image/thumb/Video124/v4/5d/f3/b8/5df3b823-1071-4f09-252a-0080b95ed5ee/pr_source.lsr/200x200bb.png"/>
  );
}

export default MovieList;