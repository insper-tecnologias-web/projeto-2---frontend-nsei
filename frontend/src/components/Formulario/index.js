import React, {useState} from 'react';
import './index.css';
import axios from 'axios';

function Formulario(props){
    const [titulo, setTitulo] = useState("");

    const buscaFilme = (event) => {
        event.preventDefault();

        const options = {
          headers: {
            url: 'https://api.themoviedb.org/3/movie/76341',
            header: 'Authorization: Bearer <<access_token>>',
            header: 'Content-Type: application/json;charset=utf-8'
          }
        }

        axios
            .get("https://api.themoviedb.org/3/movie/550?api_key=cb32d87ac8d9d5680cc01bfa5b4c5973", options)
            .then((response) => {
              console.log(response.data.results);
              // props.carregaNotas();
              // setTitulo("");
            })

    }

    const atualizaTitulo = (event) => {
        setTitulo(event.target.value);
    }
    
    return (
        <form className="form-card" onSubmit={buscaFilme}>
        <input
          className="form-card-title"
          type="text"
          name="titulo"
          placeholder="Título do Filme"
          onChange={atualizaTitulo}
          value={titulo}
        />
        
        <button className="btn" type="submit">Buscar</button>
      </form>
    );
}

export default Formulario;