import React, { Component } from "react";
import {userContext} from '../../context/userContext'

class Home extends Component {

static contextType = userContext
  
  

  handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value

    const {login} = this.context

    login(name)
   

  }

  render() {
    return <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Nombre:</label><br/>
        <input type="text" id="name" name="name"/><br />
        <input type="submit" />
        </form>

    </div>;

  }
}


export default Home;
