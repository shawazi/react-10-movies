import { useContext } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import { MovieContext } from '../context/MovieContext'


const MovieCard = () => {
  const { movies } = useContext(MovieContext);
  const imgURL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="movie-container container">
      <Row xs={2} md={4} lg={5} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Card>
              <Card.Img variant="top" src={imgURL + movie.poster_path} alt={movie.title} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MovieCard