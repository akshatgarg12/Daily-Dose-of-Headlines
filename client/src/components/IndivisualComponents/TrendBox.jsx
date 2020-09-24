import React, { useEffect, useState, useContext } from 'react';
import {CountryContext} from '../../context/CountryContextProvider';
import { Tweet } from 'react-twitter-widgets'


const TrendBox = () => {
  // state variables
  const {country}= useContext(CountryContext);
  const [trends, setTrends] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [query, setQuery] = useState('tweets');
  const [name, setName] = useState('#tweets');
  const [loading, setLoading] =useState(false);
  // initialising data and fetching!
  useEffect(()=>{
    async function getTrends(){
      // console.log(country);
      let data = await fetch(`/twitter/gettrends/${country}`);
      let resp =await data.json();
      if(resp[0] !== undefined){
        setTrends(resp[0].trends);
      } 
      else{
        setTrends([]);
      }
    }
   getTrends(); 
  },[country]);
  useEffect(()=>{
    async function getTweets(){
      setLoading(true);
      let data = await fetch(`/twitter/searchTwitter/${query}`);
      let resp = await data.json();
      setTweets(resp);
      setTimeout(()=>{
        setLoading(false);
      }, 1000) 
    }
    getTweets();
  },[query])

  // onClickHandler
  async function trendBoxClick(query,name){
    setQuery(query);
    setName(name);
  }
  // mapping functions for components
  function mapTrends(trend){  
    return <div className="trend-box" key={trend.query} onClick={()=>{
      trendBoxClick(trend.query, trend.name);
    }}>
      <h1>{trend.name}</h1>
    </div>
  }
  function mapTweets(tweet){
    return <div key = {tweet.id_str} className="tweet-box" >
      <Tweet
        key = {tweet.id}
        tweetId={tweet.id_str}
      />
    </div>
  }
  // rendering the main components
  return ( 
    <div className="twitter-box">
      <div className="trend-container">
        {trends.length ? trends.map(mapTrends) : <p style={{margin:"50% auto"}}>Sorry no Trending topics to show for this particular country! </p>}
      </div>
      <div className="tweets-container">
        <h1>{name}</h1>
        {loading ?<p>Loading...</p> : tweets.length===0 ? <p>Nothing found..</p> :tweets.map(mapTweets)}
      </div>  
     </div>
   
  );
}
 
export default TrendBox;