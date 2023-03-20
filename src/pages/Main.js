import React from 'react'
import { Container } from "react-bootstrap"
import MovieCard from '../components/MovieCard'
import NavBar from "../components/Navbar"

const Main = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="w-100 d-flex flex-column align-items-center justify-content-center mt-4">
        <h1 className="text-light mb-5">Shawaz's TMDB Movie App</h1>
        <Container className="w-100 mb-5">
          <MovieCard />
        </Container>
      </Container>
    </>
  )
}

export default Main