import React from "react";
import "./index.css";

function Nav() {
  return (
    <nav>

      <div className="nav-div-main">

        <div>
          <a>
            <img className="logo-img" src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"/>
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
