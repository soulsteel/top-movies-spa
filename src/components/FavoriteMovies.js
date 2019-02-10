import React, { useState, useEffect } from "react";

import "./FavoriteMovies.css";

import FavoriteMoviesContext from "./MovieTitle";

function FavoriteMovies() {
  
  let [invisibility, setInvisibility] = useState(true);
  let [buttonText, setButtonText] = useState("+");
  let [favoriteMovieList, setFavoriteMovieList] = useState({});
  
  let storage = window.localStorage;
  
  useEffect( function updateMovieList() {
    setFavoriteMovieList(storage);
  }, storage);

  function handleVisibility(e) {
    console.log(favoriteMovieList);
    setInvisibility(!invisibility);
    buttonText === "+" ? setButtonText("-") : setButtonText("+");
  }

  function deleteMovie(e) {
    storage.removeItem(e.target.id);
    e.target.parentNode.style.display = "none";
    //console.log(e.target.parentNode);
  }

  let list = Object.entries(FavoriteMoviesContext).map((pair) => {
    return <li key={pair[0]}>
              {favoriteMovieList.getItem(pair[0])}
              <button
                id={pair[0]} 
                className="List-button" 
                onClick={deleteMovie}>
                X
              </button>
            </li>;
  });


  return (
    <div className="Favorite-Movies-Panel">
      <h3>Your favorite movies are here</h3>
      <button className="Favorites-Button" onClick={handleVisibility}>{buttonText}</button>
      {!invisibility && <ul>{list}</ul> }

    </div>
  );
}

export default FavoriteMovies;