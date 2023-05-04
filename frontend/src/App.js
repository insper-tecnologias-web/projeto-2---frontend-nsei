import React, {useState, useEffect} from 'react';
import axios from "axios";
import Nav from './components/Nav';
import Formulario from './components/Formulario';
import './App.css';
import CardMovie from './components/CardMovie';

function App() {
  const [notes, setNotes] = useState([]); 

  useEffect(() => {
    axios
      .get("https://moviesdatabase.p.rapidapi.com/titles")
      .then((res) => setNotes(res.data));
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
