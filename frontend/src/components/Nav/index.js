import React from "react";
import "./index.css";
import logo from "../../img/Movie Db.png"

function Nav() {
  return (
    <nav>

      <div className="nav-div-main">

        <div>
          <a>
            <img className="logo-img" src={logo}/>
          </a>
        </div>

        <div className="nav-div">
          <div className="button-style-2">
            <a>Entrar</a>
          </div>

          <div className="button-style-1">
            <a>Cadastrar</a>
          </div>
        </div>

      </div>
      
    </nav>
  );
}

export default Nav;
