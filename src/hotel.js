import React from 'react';
//import ReactDOM from  'react-dom';
import  HotelCard from './components/hotel-card';

function Hotels() {
        return (
          <div>
          <div class='place-header'><b>Top</b> Hotels</div>

          <div class="box-hotel">
            <HotelCard />
          </div>
          </div>
              );
      }




    export default Hotels;
