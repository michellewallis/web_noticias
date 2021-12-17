import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Form from "../Form/Form";
import Home from "../Home/Home";
import ListNews from "../ListNews/ListNews";

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       allNews: []
    }
  }


  async componentDidMount() {
    const response = await axios.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=coCeAhcUAgpRYTnHCuZkPyMUQ2lz5j3A");
    const data = response.data.results;
    console.log(data)

    const newsArray = data.map((e,i)=>{return{
        "section": e.section,
        "title" : e.title,
        "published_date" : e.published_date,
        "abstract" : e.abstract
      
    }})
    

    const cutArray = newsArray.slice(0,5)
    console.log(cutArray)
    this.setState({allNews: [...this.state.allNews, ...cutArray]
    })
  }
    
  createNews = (input) => {
    this.setState({allNews: [...this.state.allNews, input]})
  }




  render() {
    return <div>

          <Routes>

            <Route path="/" element={<Home/>} exact />
            <Route path="/ListNews" element={<ListNews pintar={this.state.allNews}/>} />
            <Route path="/form" element={<Form submit={this.createNews}/>} />
          </Routes>



      

    </div>
  }
}

export default Main;
