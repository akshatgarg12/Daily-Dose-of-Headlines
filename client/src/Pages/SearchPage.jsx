import React from 'react';

import SearchedArticleContainer from '../components/SearchArticlePage/SearchedArticleContainer';
import SearchBox from '../components/IndivisualComponents/SearchBox';
const SearchPage = (props) => {
  return (  
    <div>
      <SearchBox />
      <SearchedArticleContainer location = {props.location}/>
    </div>
  );
}
 
export default SearchPage;