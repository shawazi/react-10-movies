import React, { useContext } from 'react'
import ReactPaginate from 'react-paginate'
import MovieCard from "./MovieCard"
import { MovieContext } from '../context/MovieContext';


const PaginatedDisplay = () => {
  const { movies, mediaImg } = useContext(MovieContext);



  return (
    <>
      <MovieCard />
      
    </>
  )
}

export default PaginatedDisplay