import React, {createContext, useState, useEffect} from 'react';

export const CountryContext = createContext();
const CountryContextProvider = (props) => {
  async function getUserLocation(){
    let locationData = await fetch('https://ipapi.co/json/');
    let data = await locationData.json();
    console.log(data.country); 
    return data.country;
  }
  // using session storage so it doesnt get back to the user location on every refresh.

  // fix: had to add a placeholder country here.. earlier it was sessionStorage.getItem('country') which was returning null;

  const [country, setCountry] = useState(sessionStorage.getItem('country')||'IN');

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