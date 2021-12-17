import React, { Component } from "react";
import Nav from '../Nav'
import {userContext} from '../../context/userContext'




class Header extends Component {
  render() {
    
    return(
        <header>
            <Nav/>
            <userContext.Consumer>
            {
                value => <>
                    <h2>Bienvenido {value.user}</h2>
                </>
            }

            </userContext.Consumer>

        </header>
    )
}}

export default Header;
