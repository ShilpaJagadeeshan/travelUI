import React from 'react';
//import ReactDOM from  'react-dom';
import '../dashboard.css';
import data from '../data/menu';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { FaMountain, FaHome ,FaHeart,FaUserAlt,FaRegBell, FaCog,FaRegCompass, FaMapMarkerAlt,FaPlane, FaQuestionCircle, FaFly,FaCalendar,FaStar, FaSearch} from 'react-icons/fa';

function MenuCard(props){
  return(
    <div class='menu'>
    {data.map(menu => {
      return (
    <div class='card-container'>
    <div class='card'>
     <div class='card-icon' >
      {menu.icon}
     </div>
      {menu.name}
    </div>

  </div>
)
  })}
    </div>
)}



export default MenuCard;
