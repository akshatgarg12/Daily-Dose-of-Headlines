import React, {useContext, useState} from 'react';
import HeadlineContainer from '../IndivisualComponents/HeadlineContainer';
import Heading from '../IndivisualComponents/Heading';
import CategoryBoxContainer from './CategoryBoxContainer';
import { CountryContext } from '../../context/CountryContextProvider';


export default function CategorySection(){
  const {country} = useContext(CountryContext);
  const [category, setCategory] = useState('Business');
  function changeCategory(category){
    setCategory(category);
  }
 
  return <div>
    <Heading 
      heading={`Top Headlines related to ${category} in ${country}`}
    />
    <CategoryBoxContainer 
      onClickHandler = {changeCategory}
    />
     <HeadlineContainer 
        url= {`http://localhost:5000/specificHeadline/${country}/${category}`}
     />
  </div>
}