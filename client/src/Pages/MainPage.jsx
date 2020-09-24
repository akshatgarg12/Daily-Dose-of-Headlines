import React from 'react';

import TopHeadlineSection from '../components/TopHeadlineSection/TopHeadlineSection';

import SearchBox from '../components/IndivisualComponents/SearchBox';

const MainPage = () => {
  return (
    <div>
      <SearchBox />
      <TopHeadlineSection />
      <hr />
    </div>
  );
}
 
export default MainPage;