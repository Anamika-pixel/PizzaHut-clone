import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://www.pizzahut.co.in/order/images/logos/logo_wide@x2.38f9109e24d22d58d048837b27f54390.png"
            alt="Pizza Hut Logo"
            style={{ width: '150px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#order">Order Online</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
