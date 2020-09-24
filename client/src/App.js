import React,{useContext} from 'react';
import {ThemeContext} from './context/ThemeContextProvider';
import './styling/App.css'
import {categoryData} from './Data/categoryData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './Pages/MainPage';
// import CategoryPage from './Pages/Categorypage';
import SearchPage from './Pages/SearchPage';
import TwitterTrendPage from './Pages/TwitterPage';

import Navbar from './components/IndivisualComponents/Navbar';
import CategoryPage from './Pages/CategoryPage';
import PersonalisedPage from './Pages/Personalised';
import ErrorPage from './Pages/404';


function App() {
  const {isLight, darkTheme, lightTheme} = useContext(ThemeContext);
  if(isLight){
    darkTheme.forEach(element => {
      document.body.style.setProperty(`--${element.key}`, `${element.value}`);
    });
  }
  else{
    lightTheme.forEach(element => {
      document.body.style.setProperty(`--${element.key}`, `${element.value}`);
    });
  }
  function mapRoutes(category){
    return <Route  path= {`/${category.name}`} exact key={category.name} 
    component = {()=> <CategoryPage category={`${category.name}`}  />}
  />
  }
  return (
    <Router>    
   
    <React.Fragment>
    <div className="App">
      <Navbar />
      <Switch>
      <Route  path="/" exact component={MainPage} /> 
      <Route  path="/search" exact component ={SearchPage} />  
      <Route  path= '/trends' exact
        component = {TwitterTrendPage}
      />
     {categoryData.map(mapRoutes)}
     <Route  path= '/personalized' exact
        component = {PersonalisedPage}
      />
      <Route exact component={ErrorPage} />
      </Switch> 

      </div>
      </React.Fragment>

    </Router>
    
    
  );
}

export default App;

