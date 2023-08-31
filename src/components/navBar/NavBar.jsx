import React from 'react'; 
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <Link to='/' className='linkscolor'>Julietta Beauty</Link>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <button className='btn'><Link to='/category/Perfumes' className='linkscolor'>Perfumes</Link></button>
            <button className='btn'><Link to='/category/Herramientas' className='linkscolor'>Herramientas</Link></button>
            <button className='btn'><Link to='/category/Cosmeticos' className='linkscolor'>Cosmeticos</Link></button>
          <CartWidget /> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;



