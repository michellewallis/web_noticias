import React, { Component } from "react";
import Nav from '../Nav'
import {userContext} from '../../context/userContext'// Usamos context
import './Header.css'
import logo from "../../assets/logo.png";




class Header extends Component {
  render() {
    
    return(
        <header className="header">
            
            <img src={logo} alt="logo"/>
            <Nav/>
            <userContext.Consumer>
            {
                value => <>
                    <h2 className="welcome">Bienvenido {value.user}</h2>
                    <button className="out" onClick={value.logout}>Salir</button>
                </>
            }

            </userContext.Consumer>

        </header>
    )
}}

export default Header;
