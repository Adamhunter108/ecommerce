import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

function LoginScreen({ location, history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (event) => {
        event.preventDefault()
        // console.log('Submitted')
        dispatch(login(email, password))
    }

    return (
        <Card 
            className="text-center"
            >
        <FormContainer>
        <Card.Header as="h3">Sign In</Card.Header>
        <br />

            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}

            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <br />

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <br />

                <Button type='submit' variant='dark'>Sign in</Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    New customer? <Link
                    to={redirect ? `/register?redirect=${redirect}` : '/register'}
                    >Create an account</Link>
                </Col>
            </Row>

        </FormContainer>
        </Card>
    )
}

export default LoginScreen
