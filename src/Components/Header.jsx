import React from 'react'
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div><Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="./" style={{fontSize:'50px',marginTop:'50px',color:'magenta',textDecoration:'none'}}>QUOTES</Navbar.Brand>
    </Container>
  </Navbar>
</div>
  )
}

export default Header