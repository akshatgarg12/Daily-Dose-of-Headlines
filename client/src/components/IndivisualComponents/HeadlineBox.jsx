import React, {useState} from 'react';

export default function HeadlineBox(props){
  const [imgSrc, setImgSrc] = useState(props.img);
  function handleOnError(e){
    setImgSrc("/ddh.jpeg");
    // console.log(e.target.src)
    e.target.onerror = null;
  }
  return <div className="headline-box" onClick={props.onClick}>
  {imgSrc!==null ? <img src={imgSrc} onError ={handleOnError} alt="could'nt fetch img" />: <img src='/ddh.jpeg' alt="could'nt fetch img" /> }
  <h1>
 {props.headline}
  </h1>
</div>
}