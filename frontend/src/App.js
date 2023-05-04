import React, {useState, useEffect} from 'react';
import axios from "axios";
import Nav from './components/Nav';
import Formulario from './components/Formulario';
import CardMovie from './components/CardMovie';
import './App.css';

function App() {
  const [filmes, setFilmes] = useState([]); 

  useEffect(() => {
    axios.request({
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/search/title/Star Wars: Episode IV - A New Hope',
      params: {exact: 'true'},
      headers: {
      'X-RapidAPI-Key': '2ca0d79c55msh98582cf902758f1p123fd2jsn235deb4f3888',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
    })
    .then((res) =>{
      setFilmes(res.data.results);
      console.log(res.data.results);
    })
  }, []);

  return (
    <div className="App">
      <div className="espaco-vazio-1"></div>

      <Nav />

      <Formulario />
      
      {/* <div className="espaco-vazio-2"></div> */}
      {/* <div className="espaco-vazio-3"></div> */}
      <div className="espaco-vazio-4"></div>

      <main className='plan-picker-band-parent'>
        {filmes.map((filme) => {
          if (filme.titleType.id === 'movie') {
            (<CardMovie key={`note__${filme.titleText.text}`} title={filme.titleText.text}>
            {filme.titleText.text}
            <br />
          </CardMovie>)
          }
        })}
        <CardMovie />
      </main>

      <footer>
        <h3>Criadores</h3>
        <div className="footer-div">
          <div className='footer-div-item'>
            <h4>Pedro Ivo A. Lima</h4>
            <a>pedroivoal1@gmail.com</a>
          </div>
          <div className='footer-div-item'>
            <h4>Rod Meo</h4>
            <a>RodMeo@gmail.com</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
