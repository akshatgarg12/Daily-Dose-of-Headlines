import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CountryContextProvider from './context/CountryContextProvider';
import ThemeContextProvider from './context/ThemeContextProvider';

ReactDOM.render(
  <ThemeContextProvider>
    <CountryContextProvider>
      <App />
    </CountryContextProvider>
  </ThemeContextProvider>
  ,
  document.getElementById('root')
);

