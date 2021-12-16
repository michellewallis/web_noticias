import React, { Component } from "react";



class Home extends Component {


  
  constructor(props) {
    super(props)
    
    this.name = React.createRef(); // crear la referencia
    this.state = {
      name:""
    }
  }
  

  handleSubmit = event => {
    event.preventDefault();
    const name = this.name.current.value // por referencia   
    this.setState({name})
  

  // const {login} = this.context

  // login(name);

  }

  render() {
    return <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Nombre:</label><br/>
        <input type="text" id="name" name="name" ref={this.name}/><br />
        <input type="submit" />
        </form>

    </div>;

  }
}


export default Home;
