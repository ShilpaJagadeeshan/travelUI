import React from 'react';
//import ReactDOM from  'react-dom';
import '../dashboard.css';
import { FaMountain, FaHome ,FaHeart,FaUserAlt,FaRegBell, FaCog,FaQuestionCircle} from 'react-icons/fa';

function SideBarIcon(){
  return(
    <div  className="sidebar">
      <div className = 'sidebar-icon' id='symbol'><FaMountain size="27px" /></div>
      <div className = 'sidebar-icon' onClick={()=>{window.location.pathname='/dashboard'}} ><FaHome size="20px" /></div>
      <div className = 'sidebar-icon' onClick={()=>{window.location.pathname='/experience'}} ><FaHeart size="20px" /></div>
      <div className = 'sidebar-icon'><FaUserAlt size="20px"/></div>
      <div className = 'sidebar-icon'><FaRegBell size="20px"/></div>
      <div className = 'sidebar-icon'><FaCog size="20px"/></div>
      <div className = 'sidebar-icon' id='info' ><FaQuestionCircle size="18px"/></div>
  </div>
 )}

export default SideBarIcon ;
