const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const apiKey = process.env.API_KEY;

let data = [];

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

const getData = async (keyword) =>{
  return fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`)
  .catch(e => [])
  .then(request => request.json())
  .then(body =>  ({articles:body.articles , status:body.status}));
}

router.get('/:keyword',async (req,res)=>{
  let keyword = req.params.keyword;
  data = await getData(keyword);
  if(data.status==200 || data.status === "ok")
    res.send(data.articles);
  else if(data.status === 429)
    res.status(429).send(apiMaxMessage);
  else res.status(500).send([]);
})

module.exports= router;