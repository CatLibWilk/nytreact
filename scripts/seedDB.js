const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytreact"
);

const articleSeed = [
  {
    title: "The Dead Zone",
    date:  new Date(Date.now()),
    url: "http://fuckyou.fuckoff"
  },
  {
    title: "The Dead Zone",
    date:  new Date(Date.now()),
    url: "http://fuckyou.fuckoff"
  },
  {
    title: "The Dead Zone",
    date:  new Date(Date.now()),
    url: "http://fuckyou.fuckoff"
  },
  
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });