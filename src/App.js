import React, {useState} from 'react';
import ReactDOM from  'react-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaMountain, FaHome ,FaHeart,FaUserAlt,FaRegBell, FaCog, FaParachuteBox} from 'react-icons/fa';



class App extends React.Component {
      render() {
        return (
  <div>
    <div class="box-sidebar">
    <div class='side-bar-menu' >
     <b>Dashboard</b>
    </div>
    <SideBarIcon icon=''/><FaHome/>
    <SideBarIcon icon=''/><FaHeart/>
    <SideBarIcon icon=''/><FaUserAlt/>
    <SideBarIcon icon=''/><FaRegBell/>
    <SideBarIcon icon=''/><FaCog/>
  </div>
  <div class='container'>
    <div class="box-header">
        <input class='search' type='text' placeholder='Search'/>
        <div class='user'>hi user</div>
   </div>
  <div class="box-menu">
   <MenuCard name="Accomodation"/>
   <MenuCard name="Experience"/>
   <MenuCard name="Adventure"/>
   <MenuCard name="Flight"/>

  </div>
  <div><b>Best Experience</b></div>
    <div class="box-places">
    < PlaceCard img='https://i.kinja-img.com/gawker-media/image/upload/t_original/syrtae5pltpzbkcnkxvh.jpg' desc='Golden Iceland' />
    < PlaceCard img='https://i.kinja-img.com/gawker-media/image/upload/t_original/syrtae5pltpzbkcnkxvh.jpg' desc='Golden Iceland' />
    < PlaceCard img='https://i.kinja-img.com/gawker-media/image/upload/t_original/syrtae5pltpzbkcnkxvh.jpg' desc='Golden Iceland' />
    < PlaceCard img='https://i.kinja-img.com/gawker-media/image/upload/t_original/syrtae5pltpzbkcnkxvh.jpg' desc='Golden Iceland' />

    </div>
   <br/>
    <div><b>Top Hotels</b></div>
  <div class="box-hotel">
    <HotelCard img='https://i.kinja-img.com/gawker-media/image/upload/t_original/syrtae5pltpzbkcnkxvh.jpg' desc='Hotel name'/>
    <HotelCard img='https://i.kinja-img.com/gawker-media/image/upload/t_original/syrtae5pltpzbkcnkxvh.jpg' desc='abcd name'/>
  </div>
  </div>

          </div>
        );
      }
}


function PlaceCard(props){
  return (
    <div class='place-card'>
       <img src={props.img} alt=' ' / >
       <div class='place-desc'>{props.desc} </div>
    </div>
  )
}

    function MenuCard(props){
      return(<div class='card-container'>
        <div class='card'>
        </div>
         {props.name}
      </div>
    )}

    function HotelCard(props){
      return(
        <div class='hotel-cards'><img src={props.img} />
        {props.desc}
        </div>
    )}

    function SideBarIcon(props){
      return(

      <div class='sidebar-icon' >
        <a>{props.icon}</a>
      </div>
    )}


    export default App;
