import "./Card.css";
import React, { Component } from 'react';

class Card extends Component {
  
    
      render() {
        return <div className='news'>
          <h1>{this.props.data.title}</h1>
          <p> Sección:{this.props.data.section}</p>
          <p> Descripción:{this.props.data.abstract}</p>
          <p> Fecha:{this.props.data.published_date}</p>
          

          <button className="delete" onClick={this.props.delete}>Borrar</button>

        </div>;
      }
}
export default Card;