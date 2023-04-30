import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center mt-5'>
           <div  className='text-center '>
           <h1>ERROR</h1>
            <h2>404 Page Not Found</h2>
            <p>The page you are looking for might have been removed or its name changed or its temporarily unavailable</p>
        <Link to="/"><Button>Go to Home</Button></Link>
           </div>
        </Container>
    );
};

export default About;