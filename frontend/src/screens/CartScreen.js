import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

function CartScreen({ match, location, history }) {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    // console.log('qty:', qty)

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    // destructure cart
    const { cartItems } = cart
    // console.log('cart items: ', cartItems)


    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])


    const removeFromCartHandler = (id) => {
        // console.log('removed: product', id)
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
        // if logged in redirect to shipping if not redirect to login
    }

    return (
        // <div>
        //     <h1>ready to check out?</h1>
        // </div>

        <Row>
            <Col md={8}>
                <h1>ready to check out?</h1>

                {cartItems.length === 0 ? (
                    <Message variant='dark'>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>

                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>

                                    <Col md={2}>
                                        ${item.price}
                                    </Col>

                                    <Col md={3}> Qty:
                                        <Form.Control
                                            as="select"
                                            value={item.qty}
                                            onChange={(event) => dispatch(addToCart(item.product, Number(event.target.value)))}
                                        >

                                             {
                                                [...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))
                                            }
                                       
                                        </Form.Control>
                                    </Col>

                                    <Col md={1}>
                                        <Button 
                                        type='button' 
                                        variant='light'
                                        onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>

                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>

            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Cart Total:</h2>
                            <h3>{cartItems.reduce((accumulator, item) => accumulator + item.qty, 0)} items</h3>
                            <h3>${cartItems.reduce((accumulator, item) => accumulator + item.qty * item.price, 0).toFixed(2)}</h3>
                            {/* reduce() is to return the sum of all the elements in an array
                            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
                            0 is where you start counting and .toFixed(2) is forcing 2 decimal places */}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button
                                type='button'
                                className='btn-block'
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                            >
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>
                                            
                    </ListGroup>
                </Card>
            
            </Col>
        </Row>



    )
}

export default CartScreen
