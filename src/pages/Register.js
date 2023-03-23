import React, { useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar';
import "./Register.css";
import { Link } from 'react-router-dom';

const Register = () => {
  const  { success, setSuccess, signup, loading, registerError } = useAuth()
  const [error, setError] = useState('');
  const [userEmail, setUserEmail] = useState("");
  const [userPW, setUserPW] = useState("");
  const [userPWConf, setUserPWConf] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();

    if (userPW !== userPWConf) {
      return setError("Passwords do not match.")
    }
    
    try {
      console.log("error", error)
      console.log("reg-error", registerError)
      console.log("success", success)
      setError('');
      await signup(userEmail, userPW);
      setSuccess(true);
    } catch (error) {
      console.log("error", error);
      console.log("reg-error", registerError);
      console.log("success", setSuccess);
      // setError(registerError);
      setSuccess(false);
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
                <Form.Control type="email" value={userEmail} required onChange={(e) => setUserEmail(e.target.value)} />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={userPW} required onChange={(e) => setUserPW(e.target.value)} />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" value={userPWConf} required onChange={(e) => setUserPWConf(e.target.value)} />
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