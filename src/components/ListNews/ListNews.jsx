import React, { Component } from "react";
import Card from "../Card";
import './ListNews.css'

class ListNews extends Component {

  paintNews = () =>{   
    return this.props.pintar.map((a,i)=> <Card data={a} delete={()=>this.props.delete(i)} key={i}/>)
  }

  render() {
    return <article>
      <h1 className="newList">Esta es la Lista de las Noticias :</h1>
      <>
      {this.paintNews()}

      </>
    </article>
}

}



export default ListNews;
