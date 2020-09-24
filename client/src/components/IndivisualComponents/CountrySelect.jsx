import React, {useContext} from 'react';
import {countryData} from '../../Data/countryData';
 import {CountryContext} from '../../context/CountryContextProvider';
export default function CountrySelect(){
  const {country, ChangeCountry} = useContext(CountryContext);

  function createOption(country,index){
    return <option key={index} value={country.code}>{country.name}</option>
  }
  return <select className="country-select" onChange={(e)=>{
      ChangeCountry(e.target.value);
  }} defaultValue={country}>
     {countryData.map(createOption)}
    </select>

}