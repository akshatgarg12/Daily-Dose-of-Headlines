const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const apiKey = process.env.API_KEY;

const apiMaxMessage = [{
  "source": {
  "id": null,
  "name": "Creator of DDH"
  },
  "author": "Akshat Garg",
  "title": "WE ARE OUT OF API CALLS",
  "url": "newsapi.org",
  "urlToImage": "/ddh.jpeg",
  "publishedAt": "",
  "content": "we are offically out of API calls as per the restrictions by NEWSAPI, come back again later!!"
  }];

const getData = async (countryCode, category) =>{
  return fetch(`http://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=${apiKey}`)
  .catch(e => [])
  .then(request => request.json())
  .then(body => ({articles:body.articles , status:body.status}));
}
// ------------------------------------------------------------ //
router.get('/:country/:category',async (req,res)=>{
  let countryCode = req.params.country;
  let category = req.params.category;
  data = await getData(countryCode,category);
  if(data.status===200 || data.status === "ok")
    res.send(data.articles);
  else if(data.status === 429)
    res.status(429).send(apiMaxMessage);
  else res.status(500).send([]);
});

module.exports= router;