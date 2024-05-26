import React from 'react'
import './Carousel.css'

const Carousel = (props) => {
  return (
    <div id="carousel">
      <img id="image-carousel" src={props.image} alt={props.id} />
      <div id="details">
        <p id="title">{props.movieName}</p>
        <p id="lead">{props.description}</p>
      </div>
    </div>
  )
}

export default Carousel