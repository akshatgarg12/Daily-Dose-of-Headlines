import React, {createContext, useState, useEffect} from 'react';

export const CountryContext = createContext();
const CountryContextProvider = (props) => {
  async function getUserLocation(){
    let locationData = await fetch('https://ipapi.co/json/');
    let data = await locationData.json();
    console.log(data); 
    return data.country;
  }
  const [country, setCountry] = useState(sessionStorage.getItem('country'));
  function ChangeCountry(countryValue){
    sessionStorage.setItem('country', countryValue);
    setCountry(countryValue);
  }
  async function setCountryOnLoad(){
    let userRegion = sessionStorage.getItem('country');
    if(!userRegion){
      let country_region = await getUserLocation();
      setCountry(country_region);
      sessionStorage.setItem('country', country_region);
    }
    else{
      setCountry(userRegion);
    }
  }
  useEffect(()=>{
    setCountryOnLoad();
  });
  return (
    <CountryContext.Provider value = {{country, ChangeCountry}}>
        {props.children}
    </CountryContext.Provider>
  );
}
 
export default CountryContextProvider;