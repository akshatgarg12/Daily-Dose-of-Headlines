import React from 'react';


export default function CategoryBox(props){
  
  return <div className="category-box" onClick={()=>{
    props.onClickHandler(props.category);
  }}>
    <p>{props.category}</p>
  </div>
}