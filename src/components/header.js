import React from "react";
import logo from "../assets/logo.jpeg";
import { AppBar, Toolbar } from "@material-ui/core";
import "./header.css";

function Header() {
  // Pesquisa como faria pra refatorar com o Material UI
  // Construir um modal na mão (pro outro projeto)
  // Estudar Javascript
  // Métodos HTTP
  // Requisição com axios
  return (
    <AppBar>
      <Toolbar>
        <div className="flex">
          <img src={logo}></img>
          <ul className="navBarList">
            <li className="listItens">
              <a>Home</a>
            </li>
            <li className="listItens">
              <a>Products</a>
            </li>
            <li className="listItens">
              <a>FAQ</a>
            </li>
            <li className="listItens">
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
