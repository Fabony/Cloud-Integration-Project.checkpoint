import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Map from './Map';
import "./App.css"


function App() {
  return (
    <Container>
      <Row className="mt-4 mb-4">
        <Col>
        <ul>  
          <li><a href="HOME">Home</a></li>
          <li><a href="NEWS">News</a></li>
          <li><a href="CONTACT US.asp">Contact</a></li>
          <li><a href="ABOUT US ">About</a></li>
       </ul>

       <nav className='bigNarbar'>
        WELCOME TO  NEW DEVELOPMENT AREA
                       <select class="selectBtntwo">
                          <option> PLEASE FIND YOUR LOCATION</option>
                          <option>Ajah</option>
                          <option>Ikoyi</option>
                          <option>Agege</option>
                          <option>Mushin</option>
                          <option>Victoria Island</option>
                          <option>Lekki</option>
                          <option>Badagry</option>
                          <option>Orile</option>
                          <option>Maryland</option>
                          <option>Ojuelegba</option>
                          <option>Lekki</option>
                          <option>Okota</option>
                        </select>
       </nav>
          
          <p>PLEASE FIND YOUR LOCATION</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Map />
        </Col>
      </Row>
    </Container>
  );
}

export default App;