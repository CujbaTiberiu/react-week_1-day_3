import { Component } from "react";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


class MyNavbar extends Component {
    render(){
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
            <Container fluid>
              <Navbar.Brand href="#home">
                Epic Bookstore
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Browser</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
        
    }
}

export default MyNavbar