import React,{useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContextProvider';

const ThemeSelect = () => {
  const {isLight, themeChanger} = useContext(ThemeContext);
  return (
    <button className="theme-change" onClick={themeChanger} style={{color: isLight? "black":"white",
   background: isLight? "white":"black"}}>
   <i className="fas fa-paint-brush"></i>
   </button>
  );
}
 
export default ThemeSelect;