import React from 'react';
import { Row, Col, Card, Button,Container } from 'react-bootstrap';

const MenuSection = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-non-veg.379d4c86ba9551f194bfc68ad9d77bc5.1.jpg?width=251" />
            <Card.Body>
              <Card.Title>Cheese Pizza</Card.Title>
              <Card.Text>
                Delicious cheese pizza topped with mozzarella cheese.
              </Card.Text>
              <Button variant="danger">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.f8baa08ad7f607f1de30f96bb9245b50.1.jpg?width=251" />
            <Card.Body>
              <Card.Title>Veggie Pizza</Card.Title>
              <Card.Text>
                Fresh vegetables with cheese and tomato sauce.
              </Card.Text>
              <Button variant="danger">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/bold-bbq-veggies.8cd7bdc4b90ad70c7acfbfdf86a812a1.1.jpg?width=251" />
            <Card.Body>
              <Card.Title>Chicken Pizza</Card.Title>
              <Card.Text>
                Juicy chicken pieces with a perfect mix of spices.
              </Card.Text>
              <Button variant="danger">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuSection;




