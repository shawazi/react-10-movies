import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#home">Powered by TMDB</Navbar.Brand>
        <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Enter Movie Title" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li><a href="#login">Login</a></li>
                <li><a href="#register">Register</a></li>
                <li><a href="#main">Main</a></li>
            </ul>
            <Navbar.Text>
                Signed in as: <a href="#login">shawazi</a>
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;