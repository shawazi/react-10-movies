import { useContext, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import CardFlip from 'react-card-flip';
import { MovieContext } from '../context/MovieContext';
// import "./MovieCard.css"


const MovieCard = () => {
  const { movies } = useContext(MovieContext);
  const imgURL = "https://image.tmdb.org/t/p/original/";
  const [flipMap, setFlipMap] = useState(new Map());

  const handleFlip = (id) => {
    setFlipMap(map => {
      const newState = new Map(map);
      newState.set(id, !newState.get(id));
      return newState;
    });
  }

  // const handleMouseEnter = (e) => {
  //   e.preventDefault();
  //   setFlipped(true);
  //   console.log("Mouse entered card")
  // }

  // const handleMouseLeave = () => {
  //   setFlipped(false);
  //   console.log("Mouse left div")
  // }

  return (
    <div className="movie-container container">
      <Row xs={2} md={4} lg={5} className="g-4 gap-5 justify-content-center">
        {movies && movies.map((movie) => (
          <Col key={movie.id}>
            <CardFlip isFlipped={flipMap.get(movie.id)} flipDirection="horizontal">
              <Card onMouseEnter={() => handleFlip(movie.id)}  className="front bg-dark">
                <Card.Img className="img-fluid" variant="top" src={imgURL + movie.poster_path} alt={movie.title} />
              </Card>
              <Card onMouseLeave={() => handleFlip(movie.id)} className="back">
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
