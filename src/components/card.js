import React, {useState} from 'react';
import ReactDOM from  'react-dom';
import '../dashboard.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import data from '../data/data'

    function PlaceCard(props){
      return (
        <div class ='place-card'>
        {data.map(place => {
          return (
            <div class='place'>
              <img src={place.img} alt=' ' / >
              <div class='place-desc'>{place.desc}<br/>{place.place} </div>
              <p class='place-days'><FaCalendar/>{place.days} days</p><p class='distance'><FaMapMarkerAlt/> {place.distance}</p>
            </div>
          )
        })}

    </div>
        )
    }

export default PlaceCard;
