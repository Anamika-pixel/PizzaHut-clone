import React from 'react';
import { Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src="https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-sm.dc5759eb18ce522a3b09d621e5b7f352.jpg"
        alt="Pizza Hut"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '500px',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h1>Delicious Pizzas Just for You</h1>
        <Button variant="danger" size="lg">Order Now</Button>
      </div>
    </div>
  );
};

export default HeroSection;
