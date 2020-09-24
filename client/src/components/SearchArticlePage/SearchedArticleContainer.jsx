import React from 'react';
import HeadlineContainer from '../IndivisualComponents/HeadlineContainer';
import Heading from '../IndivisualComponents/Heading';


const SearchedArticleContainer = (props) => {
  const searchWord = props.location.search.substring(7);
  return (
  <div>
    <Heading
      heading = {`Article related to "${decodeURI(searchWord)}"`} 
     />
     <HeadlineContainer 
       url = {`/findarticle/${searchWord}`}
     />

  </div>);
}
 
export default SearchedArticleContainer;
