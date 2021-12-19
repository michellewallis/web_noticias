import React, { Component } from "react";
import {Navigate} from "react-router-dom";
import './Form.css'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         allNews: [{}],
         redirect: false
      }
    }
      




  handleSubmit = (event) => {
    event.preventDefault();
    const section = event.target.section.value
    const title = event.target.title.value
    const date = event.target.date.value
    const abstrac = event.target.abstrac.value
    const news = {section, title, date, abstrac}
    this.props.submit(news)
    this.setState({ redirect: true });

    
  }






  render() {
    const { redirect } = this.state;

    if (redirect === true) {
      return <Navigate to='/ListNews'/>;
    }

    return <div>

      <form className="crear" onSubmit={this.handleSubmit}>
        <label htmlFor="section">Indroduzca la Sección</label><br />
        <input type="text" id="section" name="section" required="required" /><br />

        <label htmlFor="title">Introduzca el titulo de la noticia</label><br />
        <input type="text" id="title" name="title" required="required" /><br />

        <label htmlFor="date">Fecha de su noticia</label><br />
        <input type="text" id="date" name="date" required="required" /><br />

        <label htmlFor="abstrac">Indroduzca la descripción de la noticia:</label><br />
        <input type="text" id="abstrac" name="abstrac"  required="required"/><br />

        <input className="button" type="submit"  value="Añadir Noticia" />
    </form>     
      
      </div>;
  }
}

export default Form;
