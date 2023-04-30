import React from 'react';
import RightNav from '../Pages/Share/RightNav/RightNav';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsight from './EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData()
    const {title,image_url,details, category_id} = news
    return (
        <div>
           
            <Card className='mb-5'>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title className='fs-2'>{title}</Card.Title>
        <Card.Text className='fs-4'>
          {details}
        </Card.Text>
  <Link to={`/category/${category_id}`}><Button className='py-3 px-4 fs-5' variant="danger"> <FaArrowLeft></FaArrowLeft> All news in this category</Button>{' '}</Link>
      </Card.Body>
    </Card>
         <div>
          <EditorsInsight></EditorsInsight>
         </div>
            <Col lg={3}>
              {/* <RightNav></RightNav> */}
            </Col>
        </div>
    );
};

export default News;