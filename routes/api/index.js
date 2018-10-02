const router = require("express").Router();
const articleRoutes = require("./articles");
const nytRoute = require("./nytRoute")

// Articles routes
router.use("/articles", articleRoutes);
router.use("/nyt", nytRoute)

module.exports = router;
