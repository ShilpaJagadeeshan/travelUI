import React from 'react';
//import ReactDOM from  'react-dom';
import './dashboard.css';
import {Col,Row } from 'react-flexbox-grid';
//import { FaMountain, FaHome ,FaHeart,FaUserAlt,FaRegBell, FaCog, FaMapMarkerAlt, FaQuestionCircle, FaParachuteBox,FaCalendar,FaStar} from 'react-icons/fa';

 function Side() {
   return(
     <div style={{ height:"100vh", backgroundColor:"red", width:"100%", marginRight:'-10px'}}>Side bar</div>
   );
 }

 function Main() {
   return(
     <div style={{ height:"100vh", backgroundColor:"green", width:"100%"}}>Side bar</div>
   );
 }

function Dashboard () {
        return (
          <Row>
              <Col xs={12} sm={3} md={2} lg={2} > <Side/></Col>
              <Col xs={12} sm={9} md={10} lg={10} ><Main/></Col>
        </Row>
        );

    }



  export default Dashboard;
