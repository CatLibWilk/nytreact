const axios = require("axios");

module.exports = {
    getArticles: function(req, res){
      const searchDate  = req.body.date.replace(/-/g,"");
     
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
              apikey: "28c5463533f443558c7a938b7586d178",
              page: 0,
              begin_date: searchDate,
              q: req.body.term
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