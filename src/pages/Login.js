import React, { useState } from "react";
import { Container, Card, Button, Form, Alert } from "react-bootstrap";
import NavBar from "../components/Navbar";
import "./Login.css";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { login, loading, loginError } = useAuth();
  const [userEmail, setUserEmail] = useState("");
  const [userPW, setUserPW] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await login(userEmail, userPW);

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <NavBar />
      <Container
        className="w-100 d-flex flex-column align-items-center justify-content-center mt-4">
      <h1 className="handDrawn mb-5">Shawaz's TMDB Movie App</h1>
        <Card className="login-card px-5 py-3">
          <h3 className="mb-4">Shawaz's TMBD App Login</h3>
          <Form onSubmit={e => handleLogin(e)}>
            {loginError && <Alert variant="danger">{loginError}</Alert>}
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Enter your email here."
                type="email"
                value={userEmail}
                required
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Enter your password here."
                type="password"
                value={userPW}
                required
                onChange={(e) => setUserPW(e.target.value)}
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-5" type="submit">
              Sign in
            </Button>
            <Link to="/register">
              <Button className="w-100 mt-2 bg-dark">
                Register
              </Button>
            </Link>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default Login;
