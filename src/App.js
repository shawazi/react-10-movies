import Register from './pages/Register';
import Login from './pages/Login';
import Main from './pages/Main';
import MovieDetail from './pages/MovieDetail';
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css"
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
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
    </MovieProvider>
  );
}

export default App;
