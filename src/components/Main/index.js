import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

// components
import Content from './Content';

export default function index() {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={12}>{/* Multi-select drop down goes here */}</Col>
        <Col md={12}>
          <Content />
        </Col>
      </Row>
    </Container>
  );
}
