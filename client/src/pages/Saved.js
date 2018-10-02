import React, { Component } from "react";
import Article from "../components/Article";
import SaveBtn from "../components/Buttons/SaveBtn";
import API from "../utils/API";

class Saved extends Component {
    state = {
      savedArticles: []
    };

    render() {
      return (
        <h1>saved</h1>
      )
    }
}



export default Saved;