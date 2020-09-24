require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;


// middlerware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(express.static(path.join(__dirname, "client", "build")))

// endpoints
app.use('/topHeadline',require('./routes/topHeadline.js'));
app.use('/specificHeadline',require('./routes/specificHeadlines.js'));
app.use('/findarticle',require('./routes/searchArticles.js'));
app.use('/twitter', require('./routes/twitter.js'))
app.use('/scrape', require('./routes/ArticleScraper.js'))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT);