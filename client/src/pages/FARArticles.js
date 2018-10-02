import React, { Component } from "react";
import request from "request";

import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Article from "../components/Article";

import DelBtn from "../components/Buttons/DelBtn";
import SaveBtn from "../components/Buttons/SaveBtn";
import API from "../utils/API";
require('dotenv').config();

const apikey = `${process.env.REACT_APP_NYTKey}`
class Articles extends Component {
  state = {
    articles: [],
    savedArticles: []
  };

  componentDidMount() {
    this.fetchArticles();
    this.loadSavedArticles();

  };

  fetchArticles(){
    request.get({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': `${apikey}`,
        'begin_date': "20181001",
        'page': 0
      },
    }, (err, response, body) => {
      if(err) throw err;

      body = JSON.parse(body);
      const returned = body.response.docs;
      const articleArray = []
      
      returned.map(article => {
        const newArticle = {
          title: article.headline.main,
          date: article.pub_date,
          url: article.web_url
        };
        articleArray.push(newArticle)
      });
      console.log(`article array`);
      console.log(articleArray)
      this.setState({articles: articleArray})
    });
  };

  
  saveArticle = (title, date, url) => {
    console.log(this.state.savedArticles)

    const checker = this.state.savedArticles.filter(article => {
      if(article.title === title){return true}
    });
    console.log(checker.length)

    if(checker.length === 0){

      const articleData = {
        title: title,
        date: date,
        url: url
      }
  
      API.saveArticle(articleData)
          .then(result => {
            console.log(result)
            this.loadSavedArticles();
          });

    }else{
      return;
    }


  };
  

  render() {
    return (
      <div>
        <Jumbotron />
        <Navbar><h2>Fresh Articles</h2></Navbar>
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
                 
                  
                </Article>
                )
              })}
          </div>
        </div>
        {/* <div id="saved-articles" className="row">
          <div className="col-12">
          <Navbar><h2>Saved Articles</h2></Navbar>
            {this.state.savedArticles ? this.state.savedArticles.map(({_id, title, date, url}) => {
              return(

                <div>
                <Article 
                key={_id}
                title={title} 
                date={date} 
                url={url}>
      
                  
                      
                </Article>
                </div>
                )
                  }) : "no saved articles"}  
          </div>
        </div> */}

      </div>
    )
  }
}

export default Articles;
