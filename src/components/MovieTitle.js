import React from "react";

function MovieTitle(props) {
  return (
    <div>
      <p>{props.title}</p>
      <img src={props.imgSrc} alt={props.title} />
    </div>
  )
}

export default MovieTitle;