import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    console.log("API call reached")
    return axios.get("/api/articles");
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
