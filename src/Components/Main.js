
import React from 'react'
import Cardd from './Card.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMG from './image/1.jpeg'
import IMg from './image/2.jpeg'
import Img from './image/3.jpeg'
import img from './image/4.jpeg'
import Imag from './image/5.jpeg'
import image from './image/6.jpeg'


function Main() {
  return (
    <div className='main'>
       <Container fluid>
      <Row>
        <Col lg={6}>
          <Cardd img={IMG} Name={'Chris'} Status={'Alive'}/>
        </Col>
        <Col lg={6}>
          <Cardd img={IMg} Name={'Father Bob'} Status={'Alive'}/>
        </Col>
        <Col lg={6}>
          <Cardd img={Img} Name={'Regular Legs'} Status={'Alive'}/>
        </Col>
        <Col lg={6}>
          <Cardd img={img} Name={'Rick J-22'} Status={'Alive'}/>
        </Col>
        <Col lg={6}>
          <Cardd img={Imag} Name={'Taddy Mason'} Status={'Alive'}/>
        </Col>
        <Col lg={6}>
          <Cardd img={image} Name={'Regular Tyrion Lannister'} Status={'Alive'}/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Main;
