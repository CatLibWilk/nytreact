import React, { Component } from "react";
import Article from "../components/Article";
import SaveBtn from "../components/Buttons/SaveBtn";
import API from "../utils/API";

class Articles extends Component {
    state = {
      articles: [],
    };

    componentDidMount() {
      this.loadArticles();
    }

    loadArticles = () =>{
      console.log('load articles');
      API.getArticles()
          .then(result => {
            console.log(result);
            console.log("routed back (step 5)")
          })
    }

    saveArticle = (title, date, url) => {
      console.log(title, date, url)
    }
    
    render(){
      return (
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
      )
    }
}

export default Articles;