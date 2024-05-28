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
    <Navbar.Brand href="#"><h3>LivroFlix</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link className= 'p-3 testLetter' href="/HomePage"><b>Home   </b></Nav.Link>
                <Nav.Link className= 'p-3 testLetter' href="/Movies"  ><b>Movies </b></Nav.Link>
                <Nav.Link className= 'p-3 testLetter' href="/Book"    ><b>Book   </b></Nav.Link>    
        </Nav>
        <FormLabel className="d-flex p-2 pt-0">
            <Button variant='outline-info' className='col-lg-12 info' href="/loginPage">Fazer login</Button>
        </FormLabel>

        <FormLabel className="d-flex p-2 pt-0">
            <Button variant='outline-info' className='col-lg-12 info' href="/registerPage">Fazer Cadastro</Button>
        </FormLabel>
    </Navbar.Collapse>
</Container>
</Navbar>
    );
}

export default NavScrollExample;
