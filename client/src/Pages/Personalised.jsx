import React, {useState,useEffect} from 'react';
import HeadlineContainer from '../components/IndivisualComponents/HeadlineContainer';
import Heading from '../components/IndivisualComponents/Heading';
import uuid from 'react-uuid';

const PersonalisedPage = () => {
  const [input, setInput] = useState('');
  const [interests, setInterests] = useState([]);
  
// basic functions to get and set the data from localStorage
  useEffect(()=>{
    const getItem = JSON.parse(localStorage.getItem('interests'));
    if(getItem)
    setInterests(getItem);
  },[])

  useEffect(()=>{
    localStorage.setItem('interests', JSON.stringify(interests));
  },[interests]);

// string validations
  function isEmpty(str) {
    return (!str || 0 === str.length);
  }
  function isBlank(str) {
    return (!str || /^\s*$/.test(str));
  }
// functions for handling the inputs
  function submitHandler(e){
    e.preventDefault();
    if(!isBlank(input) && !isEmpty(input)){
      if(interests.length < 3){
      setInterests(prev => {
        return [...prev, input];
      })
    }else{
      alert('You can only add 3 fields')
    }
      setInput('');
  }
  }
  function removeInterest(interest){
    let newInterest = interests.filter((i)=>(i !== interest));
    setInterests(newInterest);
  }
  function mapInterests(interest){
    return <div key={uuid()}>
    <i className="fa fa-times" onClick={()=> removeInterest(interest)}></i>
    <p>
      {interest}
    </p></div>
  }
  function mapHeadlineContainers(interest){
    return <div  key={uuid()}>
      <Heading heading={interest} />
      <HeadlineContainer
       url = {`/findarticle/${interest}`}
     />
    </div>
  }
  return (
    <div>
    <h1 className="heading" style={{color: `var(--anchor-color)`}}>News that actually matters to you..</h1>
    <form method="" action="">

      <div className="search-box-div">
        <input type="text" placeholder="Enter your interests.." className="search-box-input" value={input} onChange={(e)=>{
          let temp = e.target.value;
          setInput(temp);
        }}></input>
        <button type="submit" className="search-box-button" onClick={submitHandler}><i className="fas fa-plus"></i></button>
      </div>
      
      <div className="interest-container">
        {interests.length!==0 ? interests.map(mapInterests) : <p style={{color:"var(--article-text-color)"}}>Enter your interests to get started!</p>}
      </div>

    </form>

      {interests.map(mapHeadlineContainers) || null}

  <div>
  </div>
</div>
  ) 
}

export default PersonalisedPage;