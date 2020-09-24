import React from 'react';

export default function HeadlineBox(props){
  return <div className="headline-box" onClick={props.onClick}>
  {props.img!==null ? <img src={props.img} alt="img"/> : null}
  <h1>
 {props.headline}
  </h1>
</div>
}