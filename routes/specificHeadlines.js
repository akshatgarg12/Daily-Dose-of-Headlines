const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const apiKey = process.env.API_KEY;

const getData = async (countryCode, category) =>{
  return fetch(`http://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=${apiKey}`)
  .catch(e => [])
  .then(request => request.json())
  .then(body =>  body.articles);
}
// ------------------------------------------------------------ //
router.get('/:country/:category',async (req,res)=>{
  let countryCode = req.params.country;
  let category = req.params.category;
  data = await getData(countryCode,category);
  res.send(data);
});

module.exports= router;