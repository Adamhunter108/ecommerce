import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

function ShippingScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalState, setPostalState] = useState(shippingAddress.postalState)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (event) => {
        event.preventDefault()
        // console.log('submit shipping')
        dispatch(saveShippingAddress({ address, city, postalState, postalCode, country }))
        history.push('/payment')
    }

    return (
        <FormContainer>

            <CheckoutSteps step1 step2 />

            <h1><i class="fas fa-shipping-fast"></i> Shipping</h1>

            <Form onSubmit={submitHandler}>

                <Form.Group controlId='address'>
                    <Form.Label><i class="fas fa-map-marked-alt"></i> Address</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Your Shipping Address'
                            value={address}
                            // value={address ? address : ''}
                            // if the address exists, add the address from state. if address doesn't exist, set to empty string
                            onChange={(event) => setAddress(event.target.value)}
                        >
                    </Form.Control>
                </Form.Group>
                <br />

                <Form.Group controlId='city'>
                    <Form.Label><i class="fas fa-city"></i> City</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='City'
                            // value={city ? city : ''}
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        >
                    </Form.Control>
                </Form.Group>
                <br />
                
                <Form.Group controlId='postalCode'>
                    <Form.Label><i class="fas fa-map-signs"></i> State</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='State'
                            // value={postalState ? postalState : ''}
                            value={postalState}
                            onChange={(event) => setPostalState(event.target.value)}
                        >
                    </Form.Control>
                </Form.Group> 
                <br />

                <Form.Group controlId='postalCode'>
                    <Form.Label><i class="fas fa-map-pin"></i> Zip Code</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Zip Code'
                            // value={postalCode ? postalCode : ''}
                            value={postalCode}
                            onChange={(event) => setPostalCode(event.target.value)}
                        >
                    </Form.Control>
                </Form.Group> 
                <br />

                <Form.Group controlId='country'>
                    <Form.Label><i class="fas fa-flag-usa"></i> Country</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Country'
                            // value={country ? country : ''}
                            value={country}
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
