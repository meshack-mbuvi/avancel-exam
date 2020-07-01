import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

// custom defined components
import Header from './Header';
import Chart from './Chart';

const ChartComponent = () => {
  const legend = {
    display: true,
    position: 'top',
    labels: {
      fontSize: 14,
    },
  };

  const data = {
    labels: [2014, 2015, 2016, 2017, 2018],
    datasets: [
      {
        label:
          'Number of portable Media Players Sold WorldWide each year from 2006 to 2011',
        data: ['', 35, 60, 40, 70],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  return <Line data={data} legend={legend} />;
};

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
              <Chart
                title={
                  'Number of portable Media Players Sold WorldWide each year from 2006 to 2011'
                }
                data={}
              />
              <ChartComponent />
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
