import React, {useState} from 'react';
import ReactDOM from  'react-dom';
import '../dashboard.css';
import {FaStar } from 'react-icons/fa';

    function HotelCard(props){
      return(
        <div class='hotel-cards'>
        <img src={props.img} />
        <div class='rating' >
          <FaStar color='yellow'/>
          {props.rating}
        </div>
        <div class='hotel-desc'>
          <b>{props.name}</b>
          <p>{props.desc}</p>
        </div>
        </div>
    )}

export default HotelCard;
