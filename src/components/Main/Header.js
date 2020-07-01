import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function Header() {
  return (
    <Card.Title>
      <Row>
        <Col md={1} sm={12} className='justify-content-center'>
          <i class='fa fa-calculator'></i>
        </Col>
        <Col md={11} sm={12} className='justify-content-center'>
          <p className='header '>Algebra . Real Problem</p>
        </Col>
      </Row>
    </Card.Title>
  );
}
