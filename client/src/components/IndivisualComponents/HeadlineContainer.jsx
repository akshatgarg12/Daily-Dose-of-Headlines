import React, { useEffect, useState } from 'react';
import HeadlineBox from './HeadlineBox';
import Article from './Article';

export default function HeadlineContainer(props){

  // getting the articles.
  const [index, setIndex] = useState(-1);
  const [article, setarticles]= useState([]);
  const [loading, setLoading]= useState(true); 

  // creating the articles.
  function createBox(art,index){
    return <HeadlineBox
      key = {index}
      img = {art.urlToImage}
      headline={art.title}
      onClick={()=>{
        onClickHandler(index);
      }}
    />
  }

  // setting the index whenever a headline-box is clicked to change the contents of the article box under it.
  function onClickHandler(idx){
    setIndex(idx);
  }

  // calling the data everytime loading the page.
  
  useEffect(()=>{
    let data = sessionStorage.getItem(props.url);
    if(data){
      setLoading(true);
      setarticles(JSON.parse(data));
      setLoading(false);
    }else{
      console.log("new call");
      async function getData(){
        setLoading(true);
        const data = await fetch(props.url);
        const status =  data.status;
        console.log("status-Code:",status);
        const news = await data.json();
        setarticles(news);
        setLoading(false);
        if(status===200)
        sessionStorage.setItem(props.url, JSON.stringify(news));
      }
      getData();
    }
  },[props.url])

  return <div>
          <div className="headline-container">
            {loading ? <p style={{color:"var(--article-text-color)"}}>loading Headlines...</p> :(article.length ? article.map(createBox) : <p style={{color:"var(--article-text-color)"}}>Nothing found, try searching something else</p>)}
        </div>
        <Article index={index} content={article[index]} />
     </div>
}
