import React from "react";
import "./index.css";

function CardMovie() {
  return (
    <div className="card-movie">
      <h2 className="card-movie-title">Título Filme</h2>
      <img className="card-movie-img" src="https://m.media-amazon.com/images/I/41KjuBg5k8L._SY344_BO1,204,203,200_QL70_ML2_.jpg" alt="Nome Filme" />
      <p className="card-movie-description">Descrição do filme</p>
    </div>  
  );
}

export default CardMovie;
