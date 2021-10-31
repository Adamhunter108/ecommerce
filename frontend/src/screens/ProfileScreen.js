import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { listMyOrders } from '../actions/orderActions'


function ProfileScreen({ history }) {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const orderListMy = useSelector(state => state.orderListMy)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        } else {
            if(!user || !user.name || success){
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user,success])


    const submitHandler = (event) => {
        event.preventDefault()
        if(password != confirmPassword){
            setMessage('Passwords do not match')
        } else {
            // console.log('user info updating')
            dispatch(updateUserProfile({'id': user._id, 'name': name, 'email': email, 'password': password}))
            setMessage('') 
            // setting message to a blank string clears the error message about passwords not matching
        }
        
    }

    return (
        <Row>
            <Col md={3}>
                <h2>Profile:</h2>
                <p>To update your profile, add or change details and hit the Update Profile button</p>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}

                <Form onSubmit={submitHandler}>
                
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type='name'
                                placeholder='Enter Your Name'
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            >
                        </Form.Control>
                    </Form.Group>
                    <br />

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                required
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

                    <Form.Group controlId='passwordConfirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            
                            type='password'
                            placeholder='Enter Password'
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    <br />

                    <Button type='submit' variant='dark'>Update Profile</Button>

                </Form>

            </Col>


            <Col md={9}>
                <h2>Orders</h2>
                {loadingOrders ? (
                    <Loader/>

                ) : errorOrders ? (
                    <Message variant='danger'>{errorOrders}</Message>
                ) : (
                    <Table striped responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>TD</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Paid</th>
                                <th>Delivered</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map(order => (
                                <tr key={order._id}>
                                {/* key cleared react error */}
                                    <td>{order._id}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    {/* .substring limits the characters from 0 to 10 */}
                                    <td>${order.totalPrice}</td>
                                    <td>{order.isPaid ? order.paidAt.substring(0, 10) : (
                                        <i className='fas fa-times' style={{ color: 'red '}}></i>
                                    )}</td>
                                    <td>
                                        <LinkContainer to={`/order/${order._id}`}>
                                            <Button className='btn-sm'>Details</Button>
                                        </LinkContainer>
                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </Table>
                )}
            </Col>
        </Row>
    )
}

export default ProfileScreen
