import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function Header() {
  return (
    <Card.Title>
      <Row>
        <Col lg={12}>
          <p>Algebra . Real Problem</p>
        </Col>
      </Row>
    </Card.Title>
  );
}
