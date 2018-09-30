const router = require("express").Router();
const articleRoutes = require("./articles.js");

// Articles routes
router.use("/articles", articleRoutes);

module.exports = router;
