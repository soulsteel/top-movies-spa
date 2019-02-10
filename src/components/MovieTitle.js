import React from "react";

import "./MovieTitle.css";

const favorites = [];

function MovieTitle(props) {
 
  function splitTitle(title) {
    if(title.length > 21) {
      let splitted = title.split(" ");
      let limit = Math.ceil(splitted.length / 2);
      let frontPart = splitted.slice(0, limit).join(" ");
      let backPart = splitted.slice(limit).join(" ");
      return <p>{frontPart}<br />{backPart}</p>;
    }
    return <p>{title}</p>;
  }

  function handleClick(e) {
    let storage =  window.localStorage;
    storage.setItem(props.id, props.title);
    favorites.push(storage.getItem(props.id));
  }

  return (
    <div className="movie-title">
      {splitTitle(props.title)}
      <img src={props.imgSrc} alt={props.title} />
      <button title="Add to favorites" 
              className="movie-title--button" 
              onClick={handleClick}>+</button>
    </div>
  )
}

export const FavoriteMoviesContext = React.createContext(
  window.localStorage
);

export default MovieTitle;