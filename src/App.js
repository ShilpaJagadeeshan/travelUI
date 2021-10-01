import React from 'react';
//import ReactDOM from  'react-dom';
import './App.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { FaMountain, FaHome ,FaHeart,FaUserAlt,FaRegBell, FaCog, FaParachuteBox} from 'react-icons/fa';



class App extends React.Component {
      render() {
        return (
   <div>
   <form class='booking'>
      <div class="banner">
        <h1>Travel Booking Form</h1>
      </div>
      <div class="item">
        <p>Passenger contact name</p>
        <div class="name-item">
          <input type="text" name="firstname" placeholder="First" />
          <input type="text" name="lastname" placeholder="Last" />
        </div>
      </div>
      <div class="item">
        <p>Email</p>
        <input type="email" name="email"/>
      </div>
      <div class="item">
        <p>Phone</p>
        <input type="text" name="phone" placeholder=""/>
      </div>

      <div class="item">
        <p>Total number of adults</p>
        <input type="text" name="adults"/>
      </div>
      <div class="item">
        <p>Preferred hotel / resort</p>
        <input type="text" name="hotel"/>
      </div>
          <button type="submit">Book</button>
          </form>
        </div>

        );
      }
}



    export default App;
