import React, { Component } from "react";


class ListNews extends Component {
  constructor(props) {
    super(props)

    this.name = React.createRef();

    this.state = {
        apiNews: [{}] // [{},{},{},{},{},{}] --> Para guardar los productos
    }
}


const getPokemons = async () =>{
  const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
  console.log(data)
  setPokemons(resp.data.result);
}





  render() {
    return <div>ListNews</div>;
  }
}

export default ListNews;
