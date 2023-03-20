import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { useMovie } from '../context/MovieContext';

function NavBar() {
  const {logout, currentUser} = useAuth();
  const { TMDB_API_KEY, getData, movies, setMovies } = useMovie();
  

  const handleLogout =(e) => {
    e.preventDefault();
    logout();
  }

  const handleNavSearch = async (e) => {
    e.preventDefault();
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}`;
    // console.log(e.target.elements[0].value);
    let searchQuery = "&query=" + e.target.elements[0].value;
    const newURL = searchURL + encodeURI(searchQuery);
    // console.log(newURL);
    await getData(newURL);
    // console.log(searchResults?.data.results);
    console.log(movies);
    // setMovies(movies)
  }

  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand target="_blank" href="https://www.themoviedb.org/?language=en-US">Powered by TMDB</Navbar.Brand>
        <form onSubmit={handleNavSearch} className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Enter Movie Title" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 align-items-center">
                {/* {!currentUser && <li><Link to="/login">Login</Link></li>} */}
                {!currentUser && <li><Link to="/register">Register</Link></li>}
                {currentUser && <li><button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button></li>}
                <li><Link to="/Main">Main</Link></li>
            </ul>
            <Navbar.Text className="align-items-center">
              {currentUser ? `Signed in as: ${currentUser.email}` : <NavLink to="/login">Login</NavLink>}
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;