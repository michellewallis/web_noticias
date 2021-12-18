import "./Card.css";
import React, { Component } from 'react';

class Card extends Component {
  
    
      render() {
        return <div className='news'>
          <p className="titular">{this.props.data.title}</p>
          <p className="seccion"> Sección:{this.props.data.section}</p>
          <p className="contenido"> Descripción:{this.props.data.abstract}</p>
          <p className="fecha"> Fecha:{this.props.data.published_date}</p>
          
          

          <button className="delete" onClick={this.props.delete}>Borrar</button>

        </div>;
      }
}
export default Card;