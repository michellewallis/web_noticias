
import React, { Component } from 'react';

class Card extends Component {
  
    
      render() {
        return <div>
          <h1>{this.props.data.title}</h1>
          <p>{this.props.data.section}</p>
          <p>{this.props.data.abstract}</p>
          <p>{this.props.data.published_date}</p>
        </div>;
      }
}
export default Card;