import React, {useContext} from 'react';
import HeadlineContainer from '../IndivisualComponents/HeadlineContainer';
import Heading from '../IndivisualComponents/Heading';
import {CountryContext} from '../../context/CountryContextProvider';


const TopHeadlineSection = () => {
  const {country}= useContext(CountryContext);
  return (<div>
    <Heading 
        heading={`Top Headlines in ${country}`}
      />
      <HeadlineContainer 
          url={`/topHeadline/${country}`}
      />
  </div>);
}
 
export default TopHeadlineSection;