import React from "react";
import "./index.css";

function Footer(props) {
  console.log(props.tipo)
  return (
    <div className={"espaco-vazio-" + props.tipo}></div>
  );
}

export default Footer;
