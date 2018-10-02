import React, { Component } from "react";
import Article from "../components/Article";
import Navbar from "../components/Navbar";
import DelBtn from "../components/Buttons/DelBtn";
import API from "../utils/API";

class Saved extends Component {
    state = {
      savedArticles: []
    };

    componentDidMount() {
      this.loadSaved() 

    };

    loadSaved() {
      API.getSavedArticles()
          .then (result => {
            console.log(result.data);
            const returnedSaved = result.data;
            this.setState({savedArticles: returnedSaved})
          })

    };

    deleteArticle(id) {
      console.log(`deleting article with id ${id}`)
    }

    render() {
      return (
        <div id="saved-articles" className="row">
          <div className="col-12">
          <h1>Saved Articles</h1>
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
        </div>
      )
    }
}



export default Saved;