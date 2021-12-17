import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Nav.css'





class Nav extends Component {
  render() {
    return <nav className="nav"> <ul>
      
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Añade Noticia</Link></li>
        <li><Link to="/ListNews">Noticias</Link></li>

    </ul>
      </nav>
  }
}

export default Nav;
