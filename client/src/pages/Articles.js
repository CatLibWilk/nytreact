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
          this.setState({articles: result.data, title: "", date: "", url: ""})
        })
        .catch(err => console.log(err));

  };
  

  render() {
    return (
      <div>
        <Jumbotron />
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            {this.state.articles.map(article => {
              return(
                <Article 
                key={article._id}
                title={article.title} 
                date={article.date} 
                url={article.url} />
                )
              })}
          </div>
        </div>

      </div>
    )
  }
}

export default Articles;
