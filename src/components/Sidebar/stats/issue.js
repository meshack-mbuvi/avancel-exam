import React from 'react';
import { Card } from 'react-bootstrap';

const Problems = ({ title, value }) => {
  return (
    <Card style={{ width: '11rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {value}
          <span className='small-text'> PROBLEMS</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Problems;
