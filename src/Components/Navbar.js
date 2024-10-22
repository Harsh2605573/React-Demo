import React from 'react'
import Image from './image/icon.png'
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navbar() {
  return (
   

<Container fluid>
<div className='navbar'>
    <div className='img'>
      <img src='https://rickandmortyapi.com/icons/icon-144x144.png?v=1538abef51e33ef514e8fe1ab9aeab4e' alt="" width='40px' height='40px'/>
    </div>
    <div className='abouts'>
     <p><Link to='/docs'>Docs</Link></p>
     <p><Link to='abouts'>Abouts</Link></p>
     <p className='btn'><Link to='supports'>SUPPORTS US</Link></p>
    </div>
   </div>
</Container>

  )
}

export default Navbar;
