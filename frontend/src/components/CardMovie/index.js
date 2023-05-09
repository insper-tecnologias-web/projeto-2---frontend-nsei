import React from "react";
import "./index.css";
import iconSave from '../../img/icon-save.png'
import iconLike from '../../img/icon-like.png'
// import iconSaved from '../../img/icon-saved.png'

function CardMovie(props) {

  function salvaFilme2(event) {
    event.preventDefault()
    props.salvaFilme(props)

  }

  if (props.children.primaryImage.caption.plainText.split(' in')[0].endsWith(')')){
    return (
      <div className="card-movie">
        <div className="card-movie-head">
          <div className="options">
            <a onClick={salvaFilme2}>
              <img className="icon" src={iconSave}/>
            </a>
            <a>
              <img className="icon" src={iconLike}/>
            </a>
          </div>
          
          <h2 className="card-movie-title">{props.title}</h2>
          
        </div>
        <div className="image-div">
          <img className="card-movie-img" src={props.children.primaryImage.url} alt="Nome Filme" />
        </div>
        <p className="card-movie-description">Lançamento: {props.children.releaseDate.year}</p>
      </div>  
    );
  
  }

}

export default CardMovie;
