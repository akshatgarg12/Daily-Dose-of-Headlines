import React, {useContext, useState, useEffect} from 'react';
import {CountryContext} from '../context/CountryContextProvider'
import HeadlineContainer from '../components/IndivisualComponents/HeadlineContainer';
import Heading from '../components/IndivisualComponents/Heading'
const CategoryPage = (props) => {
  const {country} = useContext(CountryContext);
  const [category, setCategory] = useState(props.category);
  useEffect(()=>{
    setCategory(props.category)
  },[props.category]);
  return (
    <div>
      <Heading heading={category} />
      <HeadlineContainer 
          url= {`/specificHeadline/${country}/${category}`}
      />
     </div>
  );
}
 
export default CategoryPage;