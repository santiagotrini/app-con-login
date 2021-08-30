// Navigation.js
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = props => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">App con Login</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
