import React, { useState, useEffect } from 'react';

export default function Article(props){
  // use state for content, as the content changes.
  const [index, setIndex] = useState(props.index);
  const [content, setContent] = useState(props.content);
  const [imgSrc, setImgSrc] = useState('/ddh.jpeg');
  // whenever user clicks a diff floating headline the content of the article changes.
  useEffect(()=>{
    setIndex(props.index);
    setContent(props.content);
    if(props.content)
    setImgSrc(props.content.urlToImage);
  },[props.index, props.content]);
  
  function hideArticle(){
    setIndex(-1);
  }
  
  function onErrorHandler(e){
    setImgSrc('/ddh.jpeg');
    e.target.onerror  = null;
  }
  let show = index!==-1 ? true:false;
  // show the article once when a headline is clicked
  if(show){
    return  <div className="article">
    {imgSrc!==null ? <div className="article__img">
      <img src={imgSrc} alt="img" onError= {onErrorHandler}></img>
    </div>: <img style={{height:"300px"}} src='/ddh.jpeg' alt="Couldnt fetch img" />}
    <div className="article__contents">
      <h1 className="article__contents--heading">{content.title}</h1>
      <p className="article__contents--paragraph">{content.description ? content.description : content.content}</p>
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