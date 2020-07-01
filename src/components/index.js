import React from 'react';
import './App.css';

import { Container, Col, Row } from 'react-bootstrap';

// user defined components
import Sidebar from './Sidebar';
import Main from './Main';

export default function index() {
  return (
    <Container fluid={true}>
      <Row>
        <Col md={2} xs={12} className='sidebar'>
          <Sidebar />
        </Col>
        <Col md={10} xs={12} className='main'>
          <Main />
        </Col>
      </Row>
    </Container>
  );
}
