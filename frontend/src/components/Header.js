import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

function Header() {

    // https://react-redux.js.org/api/hooks#useselector-examples
    const userLogin = useSelector(state => state.userLogin)
    // destruct what is coming from the store to just grab userInfo
    const { userInfo } = userLogin 

    const dispatch = useDispatch()

    const logoutHandler = () => {
        // console.log('Logout')
        dispatch(logout())
    }

    return (
        <header>
            {/* bootstrap navbar from https://react-bootstrap.github.io/components/navbar/ */}
            <Navbar bg="black" variant="dark" expand="lg" collapseOnSelect>
                <Container>

                    <LinkContainer to='/'>
                        <Navbar.Brand to="/">
                        <img
                            alt=""
                            src="https://emojis.slackmojis.com/emojis/images/1526918323/3968/wu-tang.jpg?1526918323"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            />{' '}

                            36Chambers
                            </Navbar.Brand>
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
                        
                        
                        {/* if user is logged in show Profile and Logout link, else show Login link */}
                        {userInfo ? (
                            <NavDropdown title={'Welcome, ' + userInfo.name} id='username'>

                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>

                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                            </NavDropdown>
                        ): (
                            <LinkContainer to='/login'>
                                <Nav.Link to="/login"><i className="fas fa-user"></i> Login</Nav.Link>
                            </LinkContainer>
                        )}

                        {/* <LinkContainer to='/login'>
                            <Nav.Link to="/login"><i className="fas fa-user"></i> Login</Nav.Link>
                        </LinkContainer> */}
                        {/* moved inside of logic above */}

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
