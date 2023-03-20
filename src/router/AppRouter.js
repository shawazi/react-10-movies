import React from 'react'
import Register from '../pages/Register';
import Login from '../pages/Login';
import Main from '../pages/Main';
import MovieDetail from '../pages/MovieDetail';
import { AuthProvider } from '../context/AuthContext';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <>
      <Router basename="/">  
        <AuthProvider>
          <Routes>
            <>
              <Route path="/" element={<Main />} />
              <Route path="main" element={<Main />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="details" element={<MovieDetail />} />
            </>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default AppRouter

