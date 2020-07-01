import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// components
import Issue from './issue';
const Progress = ({ number }) => {
  return (
    <CircularProgressbar
      value={number}
      text={`${number}%`}
      strokeWidth={1}
      className='text-white'
    />
  );
};

const Stats = (props) => {
  const { completed_numbers, correct_numbers } = props;
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col sm={4} xs={5} md={12}>
          <Progress number={75} />
        </Col>
        <Col sm={4} xs={7} md={12}>
          <Issue title='COMPLETED' value={completed_numbers} />
          <Issue title='CORRECT' value={correct_numbers} />
        </Col>

        <Col sm={4} xs={4} md={12}></Col>
      </Row>
    </Container>
  );
};

export default Stats;
