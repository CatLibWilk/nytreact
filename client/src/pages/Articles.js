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
    savedArticles: []
  };

  componentDidMount() {
    this.loadArticles();

  };

  loadArticles = () => {
    console.log("calling API from forward .js file")
    API.getArticles()
        .then(result => {
          this.setState({articles: result.data})
        })
        .catch(err => console.log(err));

  };

  deleteArticle = (id) => {
    API.deleteArticle(id)
      .then(res => {
        const articles = [...this.state.articles];
        const remainingArticles = articles.filter(article => {if(article._id !== res.data._id){return true}});
        this.setState({articles: remainingArticles});

      })   
  };

  saveArticle = (title, date, url) => {
    const articleData = {
      title: title,
      date: date,
      url: url
    }

    API.saveArticle(articleData)
        .then(result => {
          console.log(result)
          const articlesUpdate = [...this.state.savedArticles];
          articlesUpdate.push(result.data);
          this.setState({savedArticles: articlesUpdate})
        })
  };
  

  render() {
    return (
      <div>
        <Jumbotron />
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            {this.state.articles.map(({_id, title, date, url}) => {
              return(
                <Article 
                key={_id}
                title={title} 
                date={date} 
                url={url}>
                  <SaveBtn name="save-btn" data_id={_id} onClick={(e) => {this.saveArticle(title, date, url)}}/>
                  <DelBtn name="del-btn" data_id={_id} onClick={(e) => {this.deleteArticle(_id)}}/>
                  
                </Article>
                )
              })}
          </div>
        </div>
        <div id="saved-articles" className="row">
          <Navbar />
          <div className="col-12">
            {this.state.savedArticles ? this.state.savedArticles.map(({_id, title, date, url}) => {
              return(

                <div>
                <Article 
                key={_id}
                title={title} 
                date={date} 
                url={url}>
      
                  <DelBtn name="del-btn" data_id={_id} onClick={(e) => {this.clickHandle(e,_id)}}/>
                      
                </Article>
                </div>
                )
                  }) : "no saved articles"}  
          </div>
        </div>

      </div>
    )
  }
}

export default Articles;
