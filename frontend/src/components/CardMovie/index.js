import React from "react";
import "./index.css";
import capa from "../../img/Gone Girl.png"

function CardMovie(props) {
  return (
    <div className="card-movie">
      <h2 className="card-movie-title">{props.title}</h2>
      <img className="card-movie-img" src={capa} alt="Nome Filme" />
      <p className="card-movie-description">Descrição do filme</p>
    </div>  
  );
}

export default CardMovie;
