import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

// custom defined components
import Header from './Header';
import Chart from './Chart';
import Tag from './Tags';

const Content = () => {
  return (
    <Card>
      <Card.Body>
        <Header />
        <hr />
        <Card.Text>
          <Row>
            <Col lg={6} sm={12}>
              <p className='medium-text'>
                The recommended daily calcium intake for a 20-year-old is 1,000
                milligrams(mg). One cup of milk contains 299 mg of calcium and
                one cup of juice contains 261 mg of calcium. Which of the
                following inequalities represents the possible number of cups of
                milk m and cups of juice j a 20-year-old could drink in a day to
                meet or exceed the recommended daily calcium intake from these
                drinks alone?
              </p>

              <Card>
                <Card.Body>
                  <Chart />
                </Card.Body>
              </Card>
              <Row>
                <Col md={2} sm={1} xs={4}>
                  <Tag value={'Tag A'} className={'blue'} />
                </Col>
                <Col md={2} sm={1} xs={4}>
                  <Tag value={'Tag B'} className={'light-gray'} />
                </Col>
                <Col md={4} sm={1} xs={4}>
                  <Tag value={'Tag C'} className={'dark-gray'} />
                </Col>
              </Row>
              {/* <Tag value={'Tag B'} className={'blue'} /> */}
            </Col>
            <Col lg={6} sm={12}>
              {/* right section */}
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Content;
