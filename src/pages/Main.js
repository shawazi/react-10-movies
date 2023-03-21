import React from 'react'
import { Container } from "react-bootstrap"
import MovieCard from '../components/MovieCard'
import NavBar from "../components/Navbar"
import { useMovie } from '../context/MovieContext'
import RatingFilters from '../components/RatingFilters'

const Main = () => {
  const { loading } = useMovie();

  // console.log(userYear, userVoteThreshold)

  return (
    <>
      <NavBar />
      <Container fluid className="w-100 d-flex flex-column align-items-center justify-content-center mt-4">
        <h1 className="text-light mb-5">Shawaz's TMDB Movie App</h1>
        <RatingFilters />
        {loading && <h3 className="text-light">Loading...</h3>}
        <Container className="w-100 mb-5">
          {!loading && <MovieCard />}
        </Container>
      </Container>
    </>
  )
}

export default Main