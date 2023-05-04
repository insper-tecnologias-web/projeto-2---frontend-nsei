import React from "react";
import "./index.css";

function Footer(props) {
  return (
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
  );
}

export default Footer;
