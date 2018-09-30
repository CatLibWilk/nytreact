import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Article from "../components/Article";

import API from "../utils/API";





class Articles extends Component {
  state = {
    articles: [],
    title: "",
    author: "",
    synopsis: ""
  };

  

  render() {
    return (
      <div>
        <Jumbotron />
        <Navbar />
        

      </div>
    )
  }
}

export default Articles;
