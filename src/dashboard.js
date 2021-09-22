import React from 'react';
//import ReactDOM from  'react-dom';
import './dashboard.css';
import {Col,Row } from 'react-flexbox-grid';
import { FaMountain, FaHome ,FaHeart,FaUserAlt,FaRegBell, FaCog,FaRegCompass, FaMapMarkerAlt,FaPlane, FaQuestionCircle, FaFly,FaCalendar,FaStar, FaSearch} from 'react-icons/fa';
import PlaceCard from './components/card';
import SideBarIcon from './components/navigation'
import MenuCard from './components/square-icon';
import HotelCard from './components/hotel-card';
import App from './App'

function Dashboard () {
        var img1 = "https://i.kinja-img.com/gawker-media/image/upload/t_original/syrtae5pltpzbkcnkxvh.jpg" ;
        var img2 = "http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Whatsapp-DP-2-2.jpg";
        return (
          <div fluid className="app-main">

                  <Col>
                      <SideBarIcon/>
                  </Col>
                  <Col className="content-column" xs>
                      <Row className="box-header" >
                          <Col ><input class='search' type='text' placeholder='Search'/> </Col>
                          <Col ><div class='user'>Hello,<b> User </b><img src={img1} alt=''/></div></Col>
                      </Row>
                      <Row className='features'>
                          <MenuCard name='Accomodation'><FaHome size="35px" /></MenuCard>
                          <MenuCard name='Experience'><FaFly  size="35px" /></MenuCard>
                          <MenuCard name='Adventures'><FaRegCompass  size="35px"/></MenuCard>
                          <MenuCard name='Flights'><FaPlane size="35px" /></MenuCard>
                      </Row>
                      <div class='place-header'><b>Best</b> Experiences </div><nav>< a href='./App'>See All</a></nav>
                      <Row className='places'>
                          < PlaceCard/>
                      </Row>
                      <div class='place-header'><b>Top</b> Hotels</div>
                   <Row >
                        <div class="box-hotel">
                          <HotelCard />
                        </div>
                  </Row>
                </Col>
         </div>
        );

    }

    export default Dashboard;
