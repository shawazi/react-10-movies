import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Main from './pages/Main';
import MovieDetail from './pages/MovieDetail';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

