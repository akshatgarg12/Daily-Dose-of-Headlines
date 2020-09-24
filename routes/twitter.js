const express = require('express');
const router = express.Router();

// initialisations
const twitter = require('twitter');
const woeid = require('woeid');
 


const client = new twitter({
  consumer_key:process.env.CONSUMER_KEY,
  consumer_secret:process.env.CONSUMER_SECRET,
  bearer_token:process.env.BEARER_TOKEN
});
// async calls for data
async function getTrends(id){
  return new Promise((resolve, reject)=>{
    client.get('trends/place',{id:id},(err,data,response)=>{
      resolve(data);
    })
  })  
}
async function searchTwitter(query){
  return new Promise((resolve, reject)=>{
    client.get('search/tweets',{q:query, result_type:'mixed', lang:'en', count:'40',tweet_mode:'extended'},(err,data,response)=>{
      const statuses = data.statuses;
      resolve(statuses);
    })
  })  
}
// function to map data
function RefineData(status){
  return {
    tweet_id: status.id,
    id_str: status.id_str,
    created_at: status.created_at,
    text: status.full_text,
    hashtags: status.hashtags,
    user: status.user.name,
    twitterHandle: status.user.screen_name
  }
}

// routes
router.get('/searchTwitter/:query',async(req,res)=>{
  let q = req.params.query;
  let data = await searchTwitter(q);
  let RefinedData = data.map(RefineData);
  res.send(RefinedData);
})

router.get('/getTrends/:country',async (req,res)=>{
  let country = req.params.country;
  let id = (woeid.getWoeid(country).woeid);
  var data = await getTrends(id);
  res.send(data);
})


module.exports= router;