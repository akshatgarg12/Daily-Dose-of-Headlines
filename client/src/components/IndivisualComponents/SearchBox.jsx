import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
export default function SearchBox(){
  const history = useHistory();
  const [search, setSearch] = useState('');
  // string validations
  function isEmpty(str) {
    return (!str || 0 === str.length);
  }
  function isBlank(str) {
    return (!str || /^\s*$/.test(str));
  }
  function onClickHandler(e){
    // post the data to the url endpoint and change the contents of page. 
    e.preventDefault();
    if(!isEmpty(search) && !isBlank(search)){
      let query = search; 
      let path = `/search`; 
      history.push({
      pathname:path,
      search: `query=${query}`,
    });
    } 
  }
  return <form method="" action="">
  <div className="search-box-div">
    <input type="text" placeholder="Search for Headlines related to.." className="search-box-input" onChange={(e)=>{
      setSearch(e.target.value);
    }}></input>
    <button type="submit" onClick={onClickHandler} className="search-box-button"><i className="fas fa-search"></i></button>
  </div>
  </form>
}