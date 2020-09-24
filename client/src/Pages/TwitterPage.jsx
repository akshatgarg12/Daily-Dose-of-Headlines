import React from 'react';
import TrendBox from '../components/IndivisualComponents/TrendBox';

const TwitterTrendPage = () => {
  return (  
    <div>
      <h1 className="twitter-page-heading">TRENDING ON <i className="fa fa-twitter"></i></h1>
      <TrendBox />
    </div>
  );
}
 
export default TwitterTrendPage;