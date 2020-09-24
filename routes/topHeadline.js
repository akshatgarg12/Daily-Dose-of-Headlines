const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const apiKey = process.env.API_KEY;
let data = [];

const getData = async (countryCode) =>{
  return fetch(`http://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`)
  .catch(e => console.log(e))
  .then(request => request.json())
  .then(body =>  body.articles);
}


router.get('/:country',async (req,res)=>{
  let countryCode = req.params.country;
  data = await getData(countryCode);
  res.send(data);
})

module.exports= router;