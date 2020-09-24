// const express  = require('express');
// const router = express.Router();  
// const {
//   extract 
// } = require('article-parser');
 
// async function articleParser(targetUrl){
//   const article = await extract(targetUrl).catch(e=>console.log(e));
//   return article;
// }

// router.post('/',async(req,res)=>{
//   let url = req.body.url;
//   let data = await articleParser(url.toString()).catch(e => console.log(e));
//   res.send(data);
// })

// module.exports= router; 