import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    {/* centered and padded here, it is held at the bottom by setting the viewport height of main to 80 in index.css */}
                    <Col className="text-center py-3">
                        &copy; 36Chambers 
                        <br />
                        {/* <p>should a lil contact info go here?</p> */}
                        <a href='https://github.com/Adamhunter108/ecommerce'><i class="fab fa-github"></i> GitHub</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
