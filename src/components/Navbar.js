import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"

function NavBar() {
  const {currentUser} = useAuth();

  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand target="_blank" href="https://www.themoviedb.org/?language=en-US">Powered by TMDB</Navbar.Brand>
        <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Enter Movie Title" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/Main">Main</Link></li>
            </ul>
            <Navbar.Text className="align-items-center">
              {currentUser ? `Signed in as: ${currentUser.email}` : <NavLink to="/login">Log in</NavLink>}
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;