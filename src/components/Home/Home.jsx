import React, { Component } from "react";
import {userContext} from '../../context/userContext'
import './Home.css'


class Home extends Component {

static contextType = userContext
  
  

  handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value

    const {login} = this.context

    login(name)
   

  }

  render() {
    return <div className="signup">
        <form className="form" onSubmit={this.handleSubmit}>
          <h3 className="login">Inicia sesión</h3>
        <label htmlFor="name">Nombre:</label><br/>
        <input className="campo" type="text" id="name" name="name"/><br /> 
        <input className="send" type="submit" />
        </form>

    </div>;

  }
}


export default Home;
