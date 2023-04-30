import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../../../Provider/AuthProvider';
const Register = () => {
  const {createUser} = useContext(AuthContext)
  const [accept, setAccept] = useState(false)
const [emailError, setEmailError] = useState()
const [passwordError , setPasswordError] = useState()
const [show , setShow] = useState(false)
const navigate = useNavigate()
  const handleRegister = (e) => {
    
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name,photo, email, password)

      setPasswordError('')
      // Email and password create firebase
      createUser(email , password)
      .then(result => {
        const loggedUser = result.user;
        navigate('/category/0')
        console.log(loggedUser)
      }).catch(error => {
        console.log(error)
        
      })

    


       if(!/(?=.*[!#$%&? "])/.test(password)) {
        setPasswordError('Special characters')
        return;
      }
      else if(!/(?=.*[A-Z])/.test(password)){
        setPasswordError('least one Uppercase')
        return;
      }
       else if(password.length < 8){
        setPasswordError('Password must be 8 characters or long')
        return;
      }
      else{
        toast.success("Register Successful ");
        form.reset()
        return;
      }
      
      
  }
  const handleAccept = (e) => {
    setAccept(e.target.checked)
  }
    return (
        <Container className='mx-auto w-25 bg-light py-4 px-4 shadow-sm rounded '>
            <h4 className='py-3'>Register Your Account</h4>
            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="name" name='name' placeholder="Enter your name" required />
        <Form.Text className="text-muted">
            <p>{emailError}</p>
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="photo" name='photo' placeholder="Enter your PhotoUrl" required />
        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter your email address" required />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className='position-relative' type={show ? 'text' : 'password'} name='password' placeholder="Enter your password" required />
        <FaEye onClick={() => setShow(!show)} style={{top:'56%', right:'40%'}} className='position-absolute '></FaEye>
        <Form.Text className="text-muted">
        <p className='text-danger fs-5'>{passwordError}</p>
          </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
        onClick={handleAccept}
         type="checkbox"
         name='accept'
         label="Accept Terms and Conditions"
          />
      </Form.Group>
      <Button disabled={!accept} className='w-100 py-2 fs-3 mb-4' variant="primary" type="Login">
      Register
      </Button> <br />
      <Form.Text className="text-muted text-center fs-5 mx-auto d-block ">
      Dont’t Have An Account ? <Link className='text-decoration-none' to="/login">Login</Link>
        </Form.Text>
        <ToastContainer />
    </Form>
        </Container>
    );
};

export default Register;