import React, {useContext} from 'react';
import {CountryContext} from '../context/CountryContextProvider'
import HeadlineContainer from '../components/IndivisualComponents/HeadlineContainer';
import Heading from '../components/IndivisualComponents/Heading'
const CategoryPage = (props) => {
  const {country} = useContext(CountryContext);
  return (
    <div>
      <Heading heading={props.category} />
      <HeadlineContainer 
          url= {`/specificHeadline/${country}/${props.category}`}
      />
     </div>
  );
}
 
export default CategoryPage;