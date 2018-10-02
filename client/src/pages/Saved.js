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
      API.deleteArticle(id)
          .then(() => {
            this.loadSaved();
          })
    }

    render() {
      return (
        <div>

          <Navbar>
          <h1 className="col-4">Saved Articles</h1>
          </Navbar>
          <div id="saved-articles" className="row">
            <div className="col-12">
            
              {this.state.savedArticles.length > 0 ? this.state.savedArticles.map(({_id, title, date, url}) => {
                return(
                  
                  <div>
                    <Article 
                      key={_id}
                      title={title} 
                      date={date} 
                      url={url}>
          
          <DelBtn name="del-btn" data_id={_id} onClick={(e) => {this.deleteArticle(_id)}}/>
                    </Article>
                  </div>
                  )
                }) : <div className="col-6 mx-auto text-center p-5"><h1>No Saved Articles</h1></div>}  
            </div>
          </div>
        </div>
      )
    }
}



export default Saved;