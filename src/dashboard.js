import React from 'react';
//import { Link } from "react-router-dom";//import ReactDOM from  'react-dom';
import './dashboard.css';
import {Col,Row } from 'react-flexbox-grid';
//import { FaMountain, FaHome ,FaHeart,FaUserAlt,FaRegBell, FaCog,FaRegCompass, FaMapMarkerAlt,FaPlane, FaQuestionCircle, FaFly,FaCalendar,FaStar, FaSearch} from 'react-icons/fa';
import PlaceCard from './components/card';
import SideBarIcon from './components/navigation'
import MenuCard from './components/square-icon';
import HotelCard from './components/hotel-card';
//import Experience from './experience';
//import Hotel from './hotel';
import axios from 'axios';


function Dashboard () {
  const baseURL = "http://localhost:3001/";

  const [places, setPlace] = React.useState([]);
  const [hotels, setHotels] = React.useState([]);

  React.useEffect(() => {
    console.log("Before REST call")

    axios.get("/places").then((response) => {
      console.log(response.data)
      setPlace(response.data);

        });
        console.log("Before REST call 2")

        axios.get("/hotels").then((response) => {
          console.log(response.data)
          setHotels(response.data);

            });

  }, []);

      var img1 = "https://i.kinja-img.com/gawker-media/image/upload/t_original/syrtae5pltpzbkcnkxvh.jpg" ;
      //  var img2 = "http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Whatsapp-DP-2-2.jpg";
        return (
          <div className="app-main">

                  <Col>
                      <SideBarIcon/>
                  </Col>
                  <Col className="content-column" xs>
                      <Row className="box-header" >
                          <Col ><input className='search' type='text' placeholder='Search'/> </Col>
                          <Col ><div className='user'>Hello,<b> User </b><img src={img1} alt=''/></div></Col>
                      </Row>
                      <Row className='features'>
                          <MenuCard />
                      </Row>
                      <div className='place-header'><b>Best</b> Experiences <a  href='/experience'>see all > </a></div>

                      <Row className='places'>

                            {places.map(place => {
                              return (
                                <PlaceCard place={place} />
                              )
                            })}

                      </Row>
                      
                      <div className='place-header'><b>Top</b> Hotels <a  href='/hotel'>see all > </a></div>
                      <Row >
                        <div className="box-hotel">

                        {hotels.map(hotel =>{
                          return (
                            <HotelCard hotel={hotel} />
                          )
                        })}

                        </div>
                      </Row>
                   </Col>
         </div>
        );

    }

    export default Dashboard;
