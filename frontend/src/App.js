import React, {useState, useEffect} from 'react';
import axios from "axios";
import Nav from './components/Nav';
import Formulario from './components/Formulario';
import CardMovie from './components/CardMovie';
import Footer from './components/Footer';
import EspacoVazio from './components/EspacoVazio';
import './App.css';

function App() {

  const [filmes, setFilmes] = useState([]); 

  useEffect(() => {
    axios.request({
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/search/title/',
      params: {
        exact: 'false',
        titleType: 'movie',
        limit: 50
      },
      headers: {
      'X-RapidAPI-Key': '2ca0d79c55msh98582cf902758f1p123fd2jsn235deb4f3888',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
    })
    .then((res) =>{
      setFilmes(res.data.results);
    })
  }, []);

  function buscaTitulo(titulo){
    axios.request({
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/search/title/' + titulo,
      params: {
        exact: 'false',
        titleType: 'movie',
        limit: 50
      },
      headers: {
      'X-RapidAPI-Key': '2ca0d79c55msh98582cf902758f1p123fd2jsn235deb4f3888',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
    })
    .then((res) =>{
      setFilmes(res.data.results);
    })
  }

  return (
    <div className="App">

      <EspacoVazio tipo="3em-linear-gradient-180" />
      <Nav />

      <Formulario buscaTitulo={buscaTitulo}/>
      <EspacoVazio tipo="3em" />

      <main className='plan-picker-band-parent'>
        <div className='card-container'>
          {filmes.map((filme) => {
            if (filme.titleType.id === 'movie' & filme.primaryImage !== null & filme.releaseDate !== null) {
              return (
                <CardMovie key={`filme__${filme.id}`} title={filme.titleText.text}>
                  {filme}
                </CardMovie>
              )
            } else {
              return null;
            }
          })}
        </div>
      </main>

      <EspacoVazio tipo="4em-linear-gradient-0" />
      <EspacoVazio tipo="4em-linear-gradient-180" />

      <Footer />
    </div>
  );
}

export default App;
