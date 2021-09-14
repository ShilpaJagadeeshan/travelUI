import React from 'react';
//import ReactDOM from  'react-dom';
import './dashboard.css';
import {Col,Row } from 'react-flexbox-grid';
import { FaMountain, FaHome ,FaHeart,FaUserAlt,FaRegBell, FaCog, FaQuestionCircle, FaParachuteBox} from 'react-icons/fa';


class Dashboard extends React.Component {
      render() {
        return (
          <div fluid className="app-main">
              <Col className="sidebar">

                  <div class= 'sidebar-icon'id='symbol'><FaMountain size="25px"/></div>
                  <div class= 'sidebar-icon'><FaHome size="18px"/></div>
                  <div class= 'sidebar-icon'><FaHeart size="18px"/></div>
                  <div class= 'sidebar-icon'><FaUserAlt size="18px"/></div>
                  <div class= 'sidebar-icon'><FaRegBell size="18px"/></div>
                  <div class= 'sidebar-icon'><FaCog size="18px"/></div>
                  <div class= 'sidebar-icon' id='info' ><FaQuestionCircle size="18px"/></div>
              </Col>

            <Col className="content-column" xs>
             <Row>
                <div class="box-header">
                   <input class='search' type='text' placeholder='Search'/>
                   <div class='user'>Hi user<img src='http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Whatsapp-DP-2-2.jpg' alt=''/></div>
                </div>
             </Row>
             <Row className='features'>
                <MenuCard name='Accomodation'/>
                <MenuCard name='Experience'/>
                <MenuCard name='Acheivements'/>
                <MenuCard name='Flight'/>
             </Row>
            <div class='place-header'><b>Best</b> Experiences </div>
             <Row className='places'>
                < PlaceCard img='https://i.kinja-img.com/gawker-media/image/upload/t_original/syrtae5pltpzbkcnkxvh.jpg' desc='The GoldenCircle, Iceland' />
                < PlaceCard img='https://i.kinja-img.com/gawker-media/image/upload/t_original/syrtae5pltpzbkcnkxvh.jpg' desc='Snorkeling Iceland' />
                < PlaceCard img='https://i.kinja-img.com/gawker-media/image/upload/t_original/syrtae5pltpzbkcnkxvh.jpg' desc='Golden Iceland' />
                < PlaceCard img='https://i.kinja-img.com/gawker-media/image/upload/t_original/syrtae5pltpzbkcnkxvh.jpg' desc='Golden Iceland' />
            </Row>

            </Col>
    </div>
        );
      }
    }

    function MenuCard(props){
      return(<div class='card-container'>
        <div class='card'>
        </div>
         {props.name}
      </div>
    )}


    function PlaceCard(props){
      return (
        <div class='place-card'>
           <img src={props.img} alt=' ' / >
           <div class='place-desc'>{props.desc} </div>
        </div>
      )
    }

    export default Dashboard;
