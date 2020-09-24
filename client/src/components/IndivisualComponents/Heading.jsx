import React from 'react';

export default function Heading(props){
  return <div>
    <h1 className="heading"><i className="fas fa-arrow-right"></i> {props.heading}</h1>
  </div>
}