import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#222', color: 'white', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col sm={6}>
            <h5>Pizza Hut</h5>
            <p>Fresh and tasty pizzas delivered right to your doorstep.</p>
          </Col>
          <Col sm={6}>
            <h5>Follow Us</h5>
            <div className='d-flex  '><a href=''><i className="fa-brands fa-facebook" style={{color: '#ff0000'}}></i> 
            <div><i className="fa-brands fa-square-instagram" style={{color: '#ff0000'}}></i></div>
            <div><i className="fa-brands fa-twitter" style={{color: '#ff0000'}}></i></div>
            </a></div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
