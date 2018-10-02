import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    console.log("utils.js/API.js call reached for NYT call (step 2)")
    return axios.get("/api/nyt");
  },

  getSavedArticles: function() {
    console.log("running getsaved in utils");
    return axios.get("/api/articles")
  },
  
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }

};
