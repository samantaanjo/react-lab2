import React from 'react';
import Styles from './styles';


//2) Define component function
const ActionButton =({label,action}) => {
   
    return (<Styles.ActionButton 
     
      onClick={action}>
       {label}
      
      </Styles.ActionButton> 
      );
  
};




export default ActionButton;
