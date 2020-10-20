import React from 'react';

// You need to import your shared header...
import Header from '../shared/Header';
import ActionButton from '../shared/ActionButton';
import About from '../About';


// You're likely missing some imports...
 import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';



const Home = () => {
  return (
    <>
      {/* You need to use your shared header component... */}
      <Header title="Hello Shaun - Welcome to Lab 2"/>
      {/* You need a link to your about page as a call to action */}
      
      <Link to="/About" >
      <ActionButton  
          label="Dont click here" 
         
         />  
        </Link>
    </>
  );
}
 
export default Home;