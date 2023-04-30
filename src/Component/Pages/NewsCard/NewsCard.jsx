import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBeer, FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({news}) => {
    const {title, details, _id , image_url,author,total_view,rating} = news
    return (
        <div>
   <Card className=" mb-4">
      <Card.Header className='d-flex align-items-center gap-2'>
        <Image className='' style={{height: '60px'}} src={author?.img } roundedCircle />
        <div className='flex-grow-1'>
            <h4 className='pt-3'>{author?.name}</h4>
            <p> {moment(author.published_date).format('yyyy MM -D')}</p>
        </div>
   
        <div className='fs-3'>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" className='mb-3' src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> :
          <>
          {details.slice(0,250)}...<Link to={`/news/${_id}`}>Read More</Link>
          </>
        }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center fs-5">
        <div className='flex-grow-1'>
        <Rating
  placeholderRating={rating.number}
  
  emptySymbol={<FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar></FaStar>}
/>
           <span className=''>{rating?.number}</span>
        </div>
        <div>
            <FaEye></FaEye>{total_view}
        </div>
        
        </Card.Footer>
    </Card>
        </div>
    );
};

export default NewsCard;