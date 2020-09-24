const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const apiKey = process.env.API_KEY;

let data = [];

const getData = async (keyword) =>{
  return fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`)
  .catch(e => [])
  .then(request => request.json())
  .then(body =>  body.articles);
}

router.get('/:keyword',async (req,res)=>{
  let keyword = req.params.keyword;
  data = await getData(keyword);
  res.send(data);
})

module.exports= router;