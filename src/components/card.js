import React from 'react';
//import axios from 'axio'
//import ReactDOM from  'react-dom';
import '../dashboard.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
//import data from '../data/data'


    function PlaceCard(props){

      return (
        <div class ='place-card'>
           <div class='place'>
              <img src={props.place.image} alt=' ' / >
              <div class='place-desc'>{props.place.desc}<br/>{props.place.name} </div>
              <p class='place-days'><FaCalendar/>{props.place.days} days</p><p class='distance'><FaMapMarkerAlt/> {props.place.distance} km</p>
            </div>
        </div>
        )
    }

export default PlaceCard;
