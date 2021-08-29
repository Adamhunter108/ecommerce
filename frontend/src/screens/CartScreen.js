import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message } from '../components/Message'
import { addToCart } from '../actions/cartActions'

function CartScreen({ match, location, history }) {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    console.log('qty:', qty)

    const dispatch = useDispatch()


    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])
    // why isn't this working...
    // error:
    // React Hook useEffect has a missing dependency: 'match.params.id'. Either include it or remove the dependency array. Outer scope values like 'useEffect' aren't valid dependencies because mutating them doesn't re-render the component  react-hooks/exhaustive-deps
    // Proxy error: Could not proxy request /api/products/1 from localhost:3000 to http://127.0.0.1:8000.


    return (
        <div>
            <h1>ready to check out?</h1>
        </div>
    )
}

export default CartScreen
