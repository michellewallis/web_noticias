import React, { Component } from "react";
import Nav from '../Nav'
import {userContext} from '../../context/userContext'// Usamos context
import './Header.css'




class Header extends Component {
  render() {
    
    return(
        <header className="header">
            <Nav/>
            <userContext.Consumer>
            {
                value => <>
                    <h2>Bienvenido {value.user}</h2>
                    <button onClick={value.logout}>Salir</button>
                </>
            }

            </userContext.Consumer>

        </header>
    )
}}

export default Header;
