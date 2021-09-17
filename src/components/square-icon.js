import React, {useState} from 'react';
import ReactDOM from  'react-dom';
import '../dashboard.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MenuCard(props){
  return(<div class='card-container'>
    <div class='card'>
     <div class='card-icon'>
      {props.children }
     </div>
    </div>
     {props.name}
  </div>
)}



export default MenuCard;
