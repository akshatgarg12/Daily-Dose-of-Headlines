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

const getData = async (countryCode) =>{
  return fetch(`http://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`)
  .catch(e => console.log(e))
  .then(request => request.json())
  .then(body =>  ({articles:body.articles , status:body.status}));
}


router.get('/:country',async (req,res)=>{
  let countryCode = req.params.country;
  data = await getData(countryCode);
  if(data.status===200 || data.status === "ok")
    res.send(data.articles);
  else if(data.status === 429)
    res.status(429).send(apiMaxMessage);
  else res.status(500).send([]);
})

module.exports= router;