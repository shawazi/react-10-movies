import { useContext, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import CardFlip from 'react-card-flip';
import { MovieContext } from '../context/MovieContext'


const MovieCard = () => {
  const [flipped, setFlipped] = useState(false);
  const { movies } = useContext(MovieContext);
  const imgURL = "https://image.tmdb.org/t/p/original/";

  const handleMouseEnter = () => {
    setFlipped(true);
  }

  const handleMouseLeave = () => {
    setFlipped(false);
  }

  return (
    <div className="movie-container container">
      <Row xs={2} md={4} lg={5} className="g-4 gap-5 justify-content-center">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <CardFlip isFlipped={flipped} flipDirection="horizontal" onMouseEnter={handleMouseEnter}
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}>
              <Card className="front bg-dark">
                <Card.Img className="img-fluid" variant="top" src={imgURL + movie.poster_path} alt={movie.title} />
              </Card>
              <Card className="back" onMouseLeave={handleMouseLeave}>
                <Card.Body className="d-flex flex-column bg-dark">
                  <Card.Title className="mx-auto text-dark mb-4 px-1 bg-info">{movie.title}</Card.Title>
                  <Card.Text className="text-light">{movie.overview}</Card.Text>
                </Card.Body>
              </Card>
            </CardFlip>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MovieCard