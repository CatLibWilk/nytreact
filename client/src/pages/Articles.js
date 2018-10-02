import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Article from "../components/Article";
import SaveBtn from "../components/Buttons/SaveBtn";
import API from "../utils/API";

class Articles extends Component {
    state = {
      articles: [],
    };



    search() {
      var term = document.getElementById("search-input").value;
      var date = document.getElementById("date-input").value;
      console.log(term);
      const query = {
        term: term,
        date: date
      }
    
      API.getArticles(query)
          .then(result => {

            if(result.data.length > 0){

              const nytArticles = []
              result.data.map(article => {
                const newArticle ={
                  title: article.headline.main,
                  date: article.pub_date,
                  url: article.web_url
                };
                nytArticles.push(newArticle);
              });
              this.setState({articles: nytArticles});
            }else{
              alert("this search returned no results");
              return;
            }
            
          });
    }

    saveArticle = (title, date, url) => {
      const articleData = {
        title: title,
        date: date,
        url: url
      };

      API.saveArticle(articleData)
          .then(result => {
            alert("article successfully saved!")
          })
    }

    
    render(){
      return (
        <div>

          <Navbar />
          <div className="container-fluid">

            <div className="row">
            
              <div className="col-12 p-3 mt-3 mb-3">
                <form>
                  <div className="form-group">
                    <label>Search Term</label>
                    <input type="text" className="form-control" id="search-input" placeholder="Tito Puente"></input>
                    
                  </div>
                  <div className="form-group">
                    <label>Date</label>
                    <input type="date" className="form-control" id="date-input" placeholder="YYYYMMDD"></input>
                  </div>
                  
                  <button type="submit" className="btn btn-primary" onClick={(e) => {e.preventDefault(); this.search()}}>Search</button>
                </form>
              
              </div>
            </div>

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
        </div>
      )
    }
}

export default Articles;