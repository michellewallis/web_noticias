import React, { Component } from "react";
import { Link } from "react-router-dom";


class Nav extends Component {
  render() {
    return <ul>
      
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Añade Noticia</Link></li>
        <li><Link to="/ListNews">Noticias</Link></li>

    </ul>
      
  }
}

export default Nav;
