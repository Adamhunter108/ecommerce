import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            {/* bootstrap navbar from https://react-bootstrap.github.io/components/navbar/ */}
            <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
                <Container>

                    <LinkContainer to='/'>
                        <Navbar.Brand to="/">White Rabbit</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {/* icons imported from font-awesome library which is imported in index.html */}
                        {/* <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link> */}
                        {/* <Nav.Link href="/login"><i className="fas fa-user"></i> Login</Nav.Link>  */}
                        {/* changing stock href to LinkContainers */}

                        <LinkContainer to='/cart'>
                            <Nav.Link to="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to='/login'>
                            <Nav.Link to="/login"><i className="fas fa-user"></i> Login</Nav.Link>
                        </LinkContainer>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
