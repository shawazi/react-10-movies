import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar';
import "./Register.css";

const Register = () => {
  const emailRef = useRef() 
  const passwordRef = useRef() 
  const passwordConfirmRef = useRef()
  const  { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match.")
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to create an account.');
    }
  }
  
  return (
    <>
      <Navbar />
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "80vh"}}>
        <h1 className="text-center mb-5 text-light">Shawaz's TMDB Movie App</h1>
        <p className="text-light">Search through a massive movie database to find what you want! Torrent links coming soon!</p>
        <Card className="w-100" style={{maxWidth: "800px" }}>
          <Card.Body id="card-body">
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
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
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-4" type="submit">Sign Up</Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <p id="card-footer">Already have an account? Log In</p>
        </div>
      </Container>
    </>
  )
}

export default Register