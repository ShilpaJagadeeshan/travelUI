import React, {useState} from 'react';
import ReactDOM from  'react-dom';
import '../dashboard.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';



    function PlaceCard(props){
      return (
        <div class='place-card'>
          <img src={props.img} alt=' ' / >
          <div class='place-desc'>{props.desc}<br/>{props.place} </div>
          <p class='place-days'><FaCalendar/>{props.days} days</p> <p class='distance'><FaMapMarkerAlt/> {props.distance}</p>

        </div>
      )
    }

export default PlaceCard;
