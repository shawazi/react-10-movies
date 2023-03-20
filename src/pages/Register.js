import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar';
import "./Register.css";
import { Link } from 'react-router-dom';

const Register = () => {
  const emailRef = useRef() 
  const passwordRef = useRef() 
  const passwordConfirmRef = useRef()
  const  { success, setSuccess, signup, loading, registerError } = useAuth()
  const [error, setError] = useState('');
  
  async function handleSubmit(e) {
    e.preventDefault();

    console.log("handling submission...")

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match.")
    }
    
    try {
      setError('');
      await signup(emailRef.current.value, passwordRef.current.value);
      setSuccess(true);
    } catch {
      setError("Failed to create an account: " + {registerError})
    }
  }
  return (
    <>
      <Navbar />
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "80vh"}}>
        <h1 className="text-center mt-3 mb-5 text-light">Shawaz's TMDB Movie App</h1>
        <p className="text-light">Search through a massive movie database to find what you want! Torrent links coming soon!</p>
        <Card className="w-100" style={{maxWidth: "800px" }}>
          <Card.Body id="card-body">
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {registerError && <Alert variant="danger">{registerError}</Alert>}
            {success && <Alert variant="success">Congratulations, you've successfully created an account!</Alert>}
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required onKeyUp={(event) => {
                  if (event.key === 'Enter') {
                    handleSubmit(event);
                    }
                }}/>
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-4" type="submit">Sign Up</Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <p id="card-footer">Already have an account? <Link to="/login">Log in</Link></p>
        </div>
      </Container>
    </>
  )
}

export default Register