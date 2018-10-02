const axios = require("axios");

module.exports = {
    getArticles: function(req, res){
        console.log("nytController reached");
        

        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
              apikey: "28c5463533f443558c7a938b7586d178",
              page: 0
            }
          })
          .then(response => {
            res.json(response.data.response.docs)
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    };