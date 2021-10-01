import React from 'react';
import {Col,Row } from 'react-flexbox-grid';
//import PlaceCard from './components/card';
import SideBarIcon from './components/navigation'
import axios from 'axios';
import {FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './experience.css';

function Experience () {

  const baseURL = "http://localhost:3001/";

  const [places, setPlace] = React.useState([]);

  React.useEffect(() => {
    console.log("Before REST call")

    axios.get("/places").then((response) => {
      console.log(response.data)
      setPlace(response.data);

        });
    }, []);

        return (
          <div className="app-main">

                  <Col>
                      <SideBarIcon/>
                  </Col>
                  <Col className="content-column" xs>

                      <div className='place-header'><b>Best</b> Experiences </div>


                      <Row className='places'>
                            {places.map(place => {
                              return (
                                <div className="exp__card">
                                         <div className="card__body">
                                              <img src={place.image} class="card__image" />
                                              <Row>
                                              <Col>
                                              <p class='card__days'><FaCalendar/>{place.days} days </p></Col>
                                              <Col>
                                              <p class='card__distance'><FaMapMarkerAlt/> {place.distance} km</p>
                                              </Col>
                                              </Row>
                                              <p className="card__title">{place.desc} <br/>{place.name}</p>
                                            <p className="card__description">A small description on the place.A small description on the place.A small description on the place.</p>
                                         </div>
                                         <button className="card__btn" onClick={()=>{window.location.pathname='/experience/booking'}}>Book a Tour </button>
                                 </div>

                              )
                            })}
                      </Row>
                  </Col>
            </div>
        );

    }

    export default Experience;
