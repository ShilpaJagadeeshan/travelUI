import React, {useState} from 'react';
import ReactDOM from  'react-dom';
import '../dashboard.css';
import {FaStar } from 'react-icons/fa';
import data from '../data/hotel'

    function HotelCard(props){
      return(
        <div >
        {data.map(hotel => {
          return (
<div class='hotel-cards'>
        <img src={hotel.img} />
        <div class='rating' >
          <FaStar color='yellow'/>
          {hotel.rating}
        </div>
        <div class='hotel-desc'>
          <b>{hotel.name}</b>
          <p>{hotel.desc}</p>
        </div>
        </div>
      )
    })}
        </div>
    )}

export default HotelCard;
