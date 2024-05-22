import { Col, FormLabel, Row } from 'react-bootstrap';
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
        <FormLabel className="d-flex p-2 pt-0">
            <Button variant='outline-info' className='col-lg-12' href="/loginPage">Fazer login</Button>
        </FormLabel>
        <FormLabel className="d-flex p-2 pt-0">
            <Button variant='outline-info' className='col-lg-12' href="/registerPage">Fazer Cadastro</Button>
        </FormLabel>
    </Navbar.Collapse>
</Container>
</Navbar>
    );
}

export default NavScrollExample;
