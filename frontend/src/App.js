// import logo from './logo.svg';
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
      <Nav />
      <Formulario />
      <main>
        <ul>
          <CardMovie />
        </ul>
      </main>
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
