import React from 'react';
import CountrySelect from '../IndivisualComponents/CountrySelect';
import {options} from '../../Data/navbarOptions';
import {
  Link
} from "react-router-dom";
import ThemeSelect from './ThemeSelect';

export default function Navbar(){
  function optionMap(option){
    return <Link key={option.icon} to={`/${option.pathname}`}  style={{ textDecoration: 'none'}}><div><i className={`fa fa-${option.icon}`} onClick={()=>{
      const icons = document.querySelectorAll('.option-navbar i');
      icons.forEach((i)=>{
        if(i.className === `fa fa-${option.icon}`) i.classList.add('option-navbar-selected');
        else i.classList.remove('option-navbar-selected');
      })
    }}></i></div></Link>
  }
  return <div>
    <nav>
      <Link to='/' style={{ textDecoration: 'none'}} onClick={()=>{
        const icons = document.querySelectorAll('.option-navbar i');
        icons.forEach((i)=>{
         i.classList.remove('option-navbar-selected');
      })
      }}>Daily Dose of Headlines</Link>
      <div className="navbar-select">
      <CountrySelect />
      <ThemeSelect />
      </div>
    </nav>
    <nav className="option-navbar">
      {options.map(optionMap)}
    </nav>
      
  </div>
}