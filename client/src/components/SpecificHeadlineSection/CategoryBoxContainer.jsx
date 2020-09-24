import React from 'react';
import {categoryData} from '../../Data/categoryData';
import CategoryBox from '../IndivisualComponents/CategoryBox';


export default function CategoryBoxContainer(props){
  function createCategory(category,index){
    return <CategoryBox 
      key = {index}
      index = {index}
      category= {category.name}
      onClickHandler = {props.onClickHandler}
    />
  }
  return <div className="category-box-container">
    {categoryData.map(createCategory)}
  </div>
}