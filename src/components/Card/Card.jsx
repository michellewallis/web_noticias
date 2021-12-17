
import React, { Component } from 'react';

class Card extends Component {
  
    
      render() {
        return <div>
          <h1>{this.props.data.title}</h1>
          <p> Sección:{this.props.data.section}</p>
          <p> Descripción:{this.props.data.abstract}</p>
          <p> Fecha:{this.props.data.published_date}</p>
          

          <button onClick={this.props.delete}>Borrar</button>

        </div>;
      }
}
export default Card;