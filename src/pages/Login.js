import React, { useRef, useState } from 'react'
import { Container, Card, Button, Form, Alert } from 'react-bootstrap'
import NavBar from '../components/Navbar'
import './Login.css';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const  { login, loading } = useAuth();
  const [error, setError] = useState('');
  
  // console.log("currentUser", currentUser);
  // console.log("loading", loading);
  // console.log("registerError", registerError);
  // console.log("loginError", loginError);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to log in.');
      console.log(error)
    }
  }
  
  return (
    <>
      <NavBar />
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <Card className="login-card px-5 py-3">
          <h3 className="mb-4">Shawaz's TMBD App Login</h3>
          <Form>
          {error && <Alert variant="danger">{error}</Alert>}
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Enter your email here." type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Enter your password here." type="password" ref={passwordRef} required onKeyUp={(event) => {
                  if (event.key === 'Enter') {
                    handleSubmit(event);
                    }
                }}/>
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-5" type="submit" onClick={handleSubmit}> Sign in</Button>
              <Link to="/register"><Button disabled={loading} className="w-100 mt-2 bg-dark">Register</Button></Link>
          </Form>
        </Card>
      </Container>
    </>
  )
}

export default Login