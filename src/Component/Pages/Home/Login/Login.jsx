import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Register from './Register/Register';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const {signIn,loading} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

        signIn(email, password)
        .then(result => {
          const loggedUser = result.user;
          navigate(from, {replace:true})
          toast.success("Login Successful "); 
          form.reset()
          return
        })
        .catch(error =>{
           console.log(error)

        })
  }
    return (
        <Container className='mx-auto w-25 bg-light py-4 px-4 shadow-sm rounded '>
            <h4 className='py-3'>Login Your Account</h4>
            <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
        <Form.Text className="text-muted">
        
          </Form.Text>
      </Form.Group>
      <Button className='w-100 py-2 fs-3 mb-4' variant="primary" type="Login">
      Login
      </Button> <br />
      <Form.Text className="text-muted text-center fs-5 mx-auto d-block ">
      Dont’t Have An Account ? <Link className='text-decoration-none' to="/register">Register</Link>
        </Form.Text>
        <ToastContainer />
    </Form>
        </Container>
    );
};

export default Login;