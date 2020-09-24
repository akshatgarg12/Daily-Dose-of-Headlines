import React, {createContext, useState, useEffect} from 'react';
import {lightTheme, darkTheme} from '../Data/themeData';

const ThemeContextProvider = (props) => {
  const [isLight, setTheme] = useState(localStorage.getItem('isLight'));
  useEffect(()=>{
    if(localStorage.getItem('isLight')===undefined){
      setTheme(false);
    }else{
      setTheme(localStorage.getItem('isLight')==='light'?true:false);
    }
  },[])
  function themeChanger(){
    setTheme(!isLight);
    localStorage.setItem('isLight',localStorage.getItem('isLight')==='light'?'dark':'light');
  }
  return (  
    <ThemeContext.Provider value = {{isLight,darkTheme,lightTheme,themeChanger}}>
        {props.children}
    </ThemeContext.Provider>
  );
}
export const ThemeContext = createContext();
 
export default ThemeContextProvider;
