import React, {useState} from 'react';
import './index.css';
// import buscaTitulo from '../../App'


function Formulario(props){
    const [titulo, setTitulo] = useState("");

    const atualizaTitulo = (event) => {
        setTitulo(event.target.value);
    }

    function buscaTitulo2(event) {
      event.preventDefault()
      props.buscaTitulo(titulo)
    }
    
    return (
        <form className="form-card" onSubmit={buscaTitulo2}>
          <div className='form-main-div'>
            <input
              className="form-card-title"
              type="text"
              name="titulo"
              placeholder="Título do Filme"
              onChange={atualizaTitulo}
              value={titulo}
            />
            
            <button className="btn" type="submit">Buscar</button>
          </div>
        
      </form>
    );
}

export default Formulario;
