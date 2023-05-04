import React from "react";
import "./index.css";
import capa from "../../img/Gone Girl.png"

function CardMovie() {
  return (
    <div className="card-movie">
      <h2 className="card-movie-title">Título Filme</h2>
      <img className="card-movie-img" src={capa} alt="Nome Filme" />
      <p className="card-movie-description">Descrição do filme</p>
    </div>  
  );
}

export default CardMovie;
