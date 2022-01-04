import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'

function PlaceOrderScreen({ history }) {

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success } = orderCreate

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    cart.itemsPrice = cart.cartItems.reduce((accumulator, item) => accumulator + item.price * item.qty, 0).toFixed(2)

    // if items total over $100, shipping costs $0, else it costs $10
    cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2)

    // new york state sales tax is 8.875% 
    cart.taxPrice = Number((0.08875) * cart.itemsPrice).toFixed(2)

    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    if (!cart.paymentMethod) {
        history.push('/payment')
    }

    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [success, history])


    const placeOrder = () => {
        // console.log('Placed Order')
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice,
        }))
    }

    const userLogin = useSelector(state => state.userLogin)
    // destruct what is coming from the store to just grab userInfo
    const { userInfo } = userLogin 

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 />
            
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>

                        <ListGroup.Item>
                            <h2><i class="fas fa-shipping-fast"></i> Shipping</h2>
                            <p>
                                {/* <strong>Shipping: </strong> */}
                                {userInfo.name},
                                {'  '} 
                                {cart.shippingAddress.address},
                                {'  '}
                                {cart.shippingAddress.city}, 
                                {'  '} 
                                {cart.shippingAddress.postalState} {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2><i class="fas fa-cash-register"></i> Payment Method</h2>
                            <p>
                                <strong>Method: </strong>
                                {cart.paymentMethod}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2><i class="fas fa-boxes"></i> Order Items</h2>

                            {cart.cartItems.length === 0 ? <Message variant='info'>Your cart is empty</Message> : (
                                <ListGroup variant='flush'>
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={2}>
                                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                                </Col>
                                                <Col>
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}

                        </ListGroup.Item>

                    </ListGroup>
                </Col>

                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2><i class="fas fa-receipt"></i> Order Summary</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Items:</Col>
                                    <Col>${cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping:</Col>
                                    <Col>${cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax:</Col>
                                    <Col>${cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Total:</Col>
                                    <Col>${cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item> 

                            <ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item> 

                            
                            <ListGroup.Item>
                                <Button 
                                    type='button'
                                    className='btn-block'
                                    variant='light'
                                    disabled={cart.cartItems === 0}
                                    onClick={placeOrder}
                                    >Place Order</Button>    
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default PlaceOrderScreen
