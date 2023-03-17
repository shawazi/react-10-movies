import { useContext } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import { MovieContext } from '../context/MovieContext'


const MovieCard = () => {
  const { movies } = useContext(MovieContext);
  const imgURL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="movie-container container">
      <Row xs={2} md={4} lg={5} className="g-4 gap-5">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Card className="bg-dark">
              <Card.Img className="img-fluid" variant="top" src={imgURL + movie.poster_path} alt={movie.title} />
              <Card.Body className="d-flex flex-column bg-dark">
                <Card.Title className="mx-auto text-light mb-4">{movie.title}</Card.Title>
                <Card.Text className="text-light">{movie.overview}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MovieCard