import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../Form/Form";
import Home from "../Home/Home";
import ListNews from "../ListNews/ListNews";

class Main extends Component {
  render() {
    return (
      <main>
          <Routes>

            <Route path="/" element={<Home/>} exact />
            <Route path="/form" element={<Form/>} />
            <Route path="/newsList" element={<ListNews/>} />



          </Routes>

      </main>
    )
  }
}

export default Main;
