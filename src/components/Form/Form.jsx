import React, { Component } from "react";

class Form extends Component {

  constructor(props) {
    super(props)

    this.name = React.createRef();

    this.state = {
        newsList: [{}] // [{},{},{},{},{},{}] --> Para guardar los productos
    }
}

  createNews = (title,news) => {

    const newNews = {title,news}

    this.setState({ newsList: [...this.state.newsList, newNews] })
    //alert(`Producto ${name}, precio: ${price} € Creado`)
}

  handleSubmit = event => {
    event.preventDefault();
    const title = event.target.title.value // por referencia
    const news = event.target.news.value
    
    
    // Crear noticia
    this.createNews(title,news)
}

  render() {
    return <div>
       <h2>Alta de Nueva Noticia</h2>

<form onSubmit={this.handleSubmit}>
    <label htmlFor="title">Titulo:</label><br/>
    <input type="text" name="title"/><br />
    <label htmlFor="news">Noticia:</label><br/>
    <input type="text" name="news"/><br/>
    <input type="submit"/>
</form> 


    </div>;



  }
}

export default Form;
