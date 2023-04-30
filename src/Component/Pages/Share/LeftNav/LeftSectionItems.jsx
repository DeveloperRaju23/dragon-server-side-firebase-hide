import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../../../assets/1.png'
import img2 from '../../../../assets/2.png'
import img3 from '../../../../assets/3.png'

const LeftSectionItems = () => {
    return (

              <div className='mt-4'>
             <Row xs={1} className="g-4">
        <Col>
        <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title> 21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title> 21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title> 21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
        </div>
    );
};

export default LeftSectionItems;