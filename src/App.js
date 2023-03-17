import Register from './pages/Register';
import Login from './pages/Login';
import Main from './pages/Main';
import MovieDetail from './pages/MovieDetail';
import {Container} from "react-bootstrap"
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    
    <Container className="d-flex align-items-center justify-content-center"
    style={{minHeight: "100vh"}}
    >
    <div className="w-100" style={{maxWidth: "400px" }}>
      <Router basename="/react-10-movies">  
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details" element={<MovieDetail />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
    </Container>
  );
}

export default App;
