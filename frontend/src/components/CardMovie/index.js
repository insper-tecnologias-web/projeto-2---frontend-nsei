import React from "react";
import "./index.css";
import iconSave from '../../img/icon-save.png'
import iconLike from '../../img/icon-like.png'

function CardMovie(props) {
  if (props.children.primaryImage.caption.plainText.split(' in')[0].endsWith(')')){
    return (
      <div className="card-movie">
        <div className="card-movie-head">
          <div className="options">
            <a>
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
        <p className="card-movie-description">Lançamento: {props.children.releaseDate.day}/{props.children.releaseDate.month}/{props.children.releaseDate.year}</p>
      </div>  
    );
  // } else {
  //   return (
  //     <div className="card-movie">
  //       <div className="card-movie-head">
  //         <div className="options">
  //           <a>
  //             <img className="icon" src={iconSave}/>
  //           </a>
  //           <p>aer</p>
  //           <p>...</p>
  //         </div>
          
  //         <h2 className="card-movie-title">{props.title}</h2>
          
  //       </div>
  //       <div className="image-div">
  //         <img className="card-movie-img" src={props.children.primaryImage.url} alt="Nome Filme" />
  //       </div>
  //       <p className="card-movie-description">Lançamento: {props.children.releaseDate.day}/{props.children.releaseDate.month}/{props.children.releaseDate.year}</p>
  //       <p>Elenco: {props.children.primaryImage.caption.plainText.split(' in')[0]}</p>
  //     </div>  
  //   );
  }
    
}

export default CardMovie;
