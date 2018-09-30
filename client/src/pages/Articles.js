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

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    console.log("calling API from forward .js file")
    API.getArticles()
        .then(result => {
          console.log(result.data)
        });
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
