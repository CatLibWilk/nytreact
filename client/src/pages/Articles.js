import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Article from "../components/Article";

import DelBtn from "../components/Buttons/DelBtn";
import SaveBtn from "../components/Buttons/SaveBtn";

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

  clickHandle = (e, id) => {
    console.log("handle called");
    const tar = id;
    const name = e.target.getAttribute("name");

    const action = (name === "del-btn") ? this.removeArticle(tar) : this.saveArticle(id);

  }

  removeArticle = (id) => {
    console.log("remove called")
    console.log(id)
  };

  saveArticle = (id) => {
    console.log("save called")
    console.log(id)
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
                url={article.url}>
                  <SaveBtn name="save-btn" data_id={article._id} onClick={(e) => {this.clickHandle(e, article._id)}}/>
                  <DelBtn name="del-btn" data_id={article._id} onClick={(e) => {this.clickHandle(e, article._id)}}/>
                  
                </Article>
                )
              })}
          </div>
        </div>

      </div>
    )
  }
}

export default Articles;
