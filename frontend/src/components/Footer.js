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
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
