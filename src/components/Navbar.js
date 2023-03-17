import Container from 'react-bootstrap/Container';
import  {Dropdown}  from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

function NavBar() {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#home">Powered by TMDB</Navbar.Brand>
        <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Enter Movie Title" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
          <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-filters">
            Filters
          </Dropdown.Toggle>
          <DropdownMenu>
            <Dropdown.Item className="text-dark">Action</Dropdown.Item>
            <Dropdown.Item className="text-dark">Action</Dropdown.Item>
            <Dropdown.Item className="text-dark">Action</Dropdown.Item>
          </DropdownMenu>
        </Dropdown>
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

export default NavBar;