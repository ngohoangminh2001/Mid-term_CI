import React, { useState } from 'react'
import './CardMovie.css'

const CardMovie = (props) => {
  const [tempMovie, setTempMovie] = useState(props.movie);
  return (
    <div id="rectangle">
      <img id="image-card-movie" src={tempMovie.image} alt={tempMovie.id} onClick={() => {props.carousel();}}/>
      <p id="episode">Episode {tempMovie.episode}</p>
      <p id="movie-name">{tempMovie.movieName}</p>
    </div>
  )
}

export default CardMovie