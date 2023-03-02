import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../CardWidget/CardWidget';
import Count from '../Count/Count';


const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Tu Tienda </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">SALE!</NavDropdown.Item>
              <NavDropdown.Item href="">Traje de baño</NavDropdown.Item>
              <NavDropdown.Item href="">Remeras / Remerones</NavDropdown.Item>
              <NavDropdown.Item href="">Buzos / Sweaters</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Outlet</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="Search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"/>
            <Button variant="outline-success">🔍</Button>
          </Form>
          <Count />
          <CardWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

     
    
  
}

export default NavBar