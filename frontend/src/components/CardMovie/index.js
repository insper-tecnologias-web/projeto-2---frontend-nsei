import React from "react";
import "./index.css";

function CardMovie(props) {
  // console.log(props.id)
  // console.log(props)
  // if ()
  return (
    <div className="card-movie">
      <h2 className="card-movie-title">{props.title}</h2>
      <img className="card-movie-img" src={props.children.primaryImage.url} alt="Nome Filme" />
      <p className="card-movie-description">Lançamento: {props.children.releaseDate.day}/{props.children.releaseDate.month}/{props.children.releaseDate.year}</p>
      <p>Elenco: {props.children.primaryImage.caption.plainText.split(' in')[0]}</p>
    </div>  
  );
}

export default CardMovie;
