import React from 'react'
import { Container } from "react-bootstrap"
import MovieCard from '../components/MovieCard'
import Navbar from "../components/Navbar"

const Main = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="mw-100 d-flex flex-column align-items-center justify-content-center mt-4">
        <h1 className="mb-5">Shawaz's Movie App</h1>
        <Container className="w-100 border border-dark">
          <MovieCard />
        </Container>
      </Container>
    </>
  )
}

export default Main