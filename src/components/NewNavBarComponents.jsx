import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
    return (
  <Navbar expand="lg" className="bg-dark text-white" data-bs-theme="dark">
    <Container>
    <Navbar.Brand href="#">LivroFlix</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/HomePage" >Home</Nav.Link>
                <Nav.Link href="/Movies"   >Movies </Nav.Link>
                <Nav.Link href="/Book"     >Book   </Nav.Link>    
        </Nav>
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar.Collapse>
</Container>
</Navbar>
    );
}

export default NavScrollExample;
