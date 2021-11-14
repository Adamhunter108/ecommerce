import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (event) => {
        event.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
            <Row>
                <Col>
                    <Form.Control
                        type='text'
                        placeholder='Search'
                        name='q'
                        onChange={(event) => setKeyword(event.target.value)}
                        className='mr-sm-2 ml-sm-5'
                    ></Form.Control>
                    
                </Col>

                {/* <Col>
                    <i className="fas fa-search"></i>
                </Col> */}
                
                <Col>
                    <Button
                        type='submit'
                        variant='outline-warning'
                        
                    >
                        {/* Submit */}
                        <i className="fas fa-search"></i>
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox
