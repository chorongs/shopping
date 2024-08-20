import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

const LoginPage = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const loginUser = (event) => {
    event.preventDefault()
    setAuthenticate(true)
    navigate('/')
  }
  
  return (


    <Container style={{ 
      maxWidth: '500px', 
      height:'500px',
      margin: '0 auto',
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      borderRadius: '10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',   
      justifyContent: 'center',  
      alignItems: 'center'         
        }}>

      <Form onSubmit={(event)=>loginUser(event)}>
      <div style={{ marginBottom: '20px', textAlign: 'center', padding: '30px' }}>
      <h5>반가워요!</h5>
      </div>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>

    </Container>
  )
}

export default LoginPage