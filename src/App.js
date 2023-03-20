import React from "react";
import "./app.css"
import AppRouter from "./router/AppRouter";
import { MovieProvider } from './context/MovieContext';


function App() {
  return (
    <MovieProvider>
      <AppRouter />
    </MovieProvider>
  );
}

export default App;
