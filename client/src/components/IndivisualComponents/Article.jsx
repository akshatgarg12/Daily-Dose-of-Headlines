import React, { useState, useEffect } from 'react';

export default function Article(props){
  // use state for content, as the content changes.
  const [index, setIndex] = useState(props.index);
  const [content, setContent] = useState(props.content);

  // whenever user clicks a diff floating headline the content of the article changes.
  useEffect(()=>{
    setIndex(props.index);
    setContent(props.content);
  },[props.index]);

  function hideArticle(){
    setIndex(-1);
  }
  
  let show = index!==-1 ? true:false;
  // show the article once when a headline is clicked
  if(show){
    return  <div className="article">
    {content.urlToImage!==null ? <div className="article__img">
      <img src={content.urlToImage} alt="img"></img>
    </div>: null}
    <div className="article__contents">
      <h1 className="article__contents--heading">{content.title}</h1>
      <p className="article__contents--paragraph">{content.description}</p>
      <div className="article__contents--footer">
        <a href={content.url}>Link to full article</a>
        <p>source: {content.source.name}</p>
        <p>publishedAt:{content.publishedAt}</p>
        <i className="fas fa-times" onClick={hideArticle}></i>
      </div>
    </div>
  </div> 
  } else return null;  
}