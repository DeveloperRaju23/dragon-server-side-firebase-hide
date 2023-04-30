import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
      logOut()
      .then()
      .catch(error => {
        console.log(error)
      })
    }
    return (
        <Container>
              <Navbar className="mb-5" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fs-3 d-flex gap-4">
            <Link className="text-decoration-none fw-semibold  text-dark mt-2" to="/category/0">Home</Link>
           <Link className="text-decoration-none fw-semibold   text-dark mt-2" to="/about">About</Link>
           <Link className="text-decoration-none  fw-semibold   text-dark mt-2" to="/career">Career</Link>
         </Nav>
        
          <Nav className="">
         
            {
              user &&
              <Link to="/profile"> <FaUserCircle className="fs-1 mt-2 "></FaUserCircle></Link>
            }
            
           {user ? 
            <button onClick={handleLogOut} className="login-btn ms-3">Logout</button>
            : <Link to="/login"> <button className="login-btn">Login</button></Link>
           }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;