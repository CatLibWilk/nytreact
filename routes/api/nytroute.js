const router = require("express").Router();
const nytController = require("../../controllers/nytController");

// Matches with "/api/nyt"
router.route("/")
  .post(nytController.getArticles)

module.exports = router;
