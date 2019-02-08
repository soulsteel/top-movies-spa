import React from "react";

import "./MovieTitle.css";

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

  return (
    <div className="flip-container movie-title" onTouchStart="this.classList.toggle('hover');">
      <div className="flipper">
        <div className="front">
          {splitTitle(props.title)}
          <img src={props.imgSrc} alt={props.title} />
        </div>
        <div className="back">
          <p>Flipper</p>
        </div>
      </div>
    </div>
  )
}

export default MovieTitle;