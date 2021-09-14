import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'

function ShippingScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (event) => {
        event.preventDefault()
        // console.log('submit shipping')
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <h1>Shipping</h1>

            <Form onSubmit={submitHandler}>

                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Your Shipping Address'
                            value={address ? address : ''}
                            // if the address exists, add the address from state. if address doesn't exist, set to empty string
                            onChange={(event) => setAddress(event.target.value)}
                        >
                    </Form.Control>
                </Form.Group>
                <br />

                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='City'
                            value={city ? city : ''}
                            onChange={(event) => setCity(event.target.value)}
                        >
                    </Form.Control>
                </Form.Group>
                <br />

                <Form.Group controlId='postalCode'>
                    <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Zip Code'
                            value={postalCode ? postalCode : ''}
                            onChange={(event) => setPostalCode(event.target.value)}
                        >
                    </Form.Control>
                </Form.Group> 
                <br />

                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Country'
                            value={country ? country : ''}
                            onChange={(event) => setCountry(event.target.value)}
                        >
                    </Form.Control>
                </Form.Group>
                <br />

                <Button type='submit' variant='dark'>On to payment</Button>

            </Form>

        </FormContainer>
    )
}

export default ShippingScreen
