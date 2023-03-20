import React, { useRef, useState } from 'react'
import { Container, Card, Button, Form, Alert } from 'react-bootstrap'
import NavBar from '../components/Navbar'
import './Login.css';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef() 
  const passwordRef = useRef() 
  const  { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to log in.');
    }
  }
  
  return (
    <>
      <NavBar />
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <Card className="login-card px-5 py-3">
          <h3 className="mb-4">Shawaz's TMBD App Login</h3>
          <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Enter your email here." type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Enter your password here." type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-5" type="submit"> Sign in</Button>
              <Link to="/register"><Button disabled={loading} className="w-100 mt-2 bg-dark">Register</Button></Link>
          </Form>
        </Card>
      </Container>
    </>
  )
}

export default Login