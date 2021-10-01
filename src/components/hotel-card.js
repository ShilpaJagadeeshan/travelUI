import React from 'react';
//import ReactDOM from  'react-dom';
import '../dashboard.css';
import {FaStar } from 'react-icons/fa';
//import data from '../data/hotel'

    function HotelCard(props){
      return(

        <div class='hotel-cards'>
          <img src={props.hotel.image} alt='' />
          <div class='rating' >
            <FaStar color='yellow'/>
            {props.hotel.rating}
          </div>
          <div class='hotel-desc'>
            <b>{props.hotel.name}</b>
            <p>{props.hotel.place}</p>
          </div>
        </div>
    )}

export default HotelCard;
