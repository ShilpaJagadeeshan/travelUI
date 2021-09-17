import React, {useState} from 'react';
import ReactDOM from  'react-dom';
import '../dashboard.css';
import { FaMountain, FaHome ,FaHeart,FaUserAlt,FaRegBell, FaCog,FaRegCompass, FaMapMarkerAlt,FaPlane, FaQuestionCircle, FaFly,FaCalendar,FaStar, FaSearch} from 'react-icons/fa';

function SideBarIcon(){
  return(

    <div  className="sidebar">
      <div class= 'sidebar-icon'id='symbol'><FaMountain size="27px"/></div>
      <div class= 'sidebar-icon'><FaHome size="20px"/></div>
      <div class= 'sidebar-icon'><FaHeart size="20px"/></div>
      <div class= 'sidebar-icon'><FaUserAlt size="20px"/></div>
      <div class= 'sidebar-icon'><FaRegBell size="20px"/></div>
      <div class= 'sidebar-icon'><FaCog size="20px"/></div>
      <div class= 'sidebar-icon' id='info' ><FaQuestionCircle size="18px"/></div>
  </div>

)}

export default SideBarIcon ;
