
import './App.css';
import React, { Component } from 'react'
import Header from './components/Header/';
import Main from './components/Main/';
import Footer from './components/Footer';
import { userContext } from './context/userContext'// para usar context
import { BrowserRouter } from 'react-router-dom'; // utilizar rutas


export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      user:"",
      login: this.login,
      logout: this.logout
       
    }
  }
  
  login = user => this.setState({user}) 
  logout = () => this.setState({user:""})

  render() {
    return (
      
      <div>
        <BrowserRouter>
        <userContext.Provider value={this.state}>
          <Header/>
          <Main/>
        </userContext.Provider>
        </BrowserRouter>
          <Footer/>

    </div>
      
    )
  }
}


 
