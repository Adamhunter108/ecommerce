import React, { useState, useEffect } from 'react'
import { Link, Router } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

// import products from '../products'
// not necessary anymore


function ProductScreen({ match }) {

    // variable that is the result of what is found in the products array looking for the _id - p for product
    // const product = products.find((p) => p._id === match.params.id)
    // not necessary anymore


    const [product, setProduct] = useState([])


    useEffect(() => {
        console.log('useEffect triggered')
        async function fetchProduct() {
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    }, [])



    return (
        <div>
            {/* <h1>{product.name}</h1> */}
            {/* testing output of product name */}

            <Link to='/' className='btn btn-light my-3'>Go Back</Link>

           <Row>
               <Col md={6}>
                   <Image src={product.image} alt={product.name} fluid />
               </Col>

               <Col md={3}>
                   <ListGroup variant="flush">
                       <ListGroup.Item>
                            <h3>{product.name}</h3>
                       </ListGroup.Item>

                       <ListGroup.Item>
                           <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                       </ListGroup.Item>

                       <ListGroup.Item>
                           Price: ${product.price}
                       </ListGroup.Item>

                       <ListGroup.Item>
                           Description: {product.description}
                       </ListGroup.Item>
                   </ListGroup>
               </Col>


               <Col md={3}>
                   <Card>
                       <ListGroup.Item>
                           <Row>
                               <Col>Price:</Col>
                               <Col><strong>${product.price}</strong></Col>
                           </Row>
                       </ListGroup.Item>

                       <ListGroup.Item>
                           <Row>
                               <Col>Status:</Col>
                               <Col>
                                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                               </Col>
                           </Row>
                       </ListGroup.Item>

                       <ListGroup.Item>
                           <Button className='btn-block btn-dark' disabled={product.countInStock === 0} type='button'>Add To Cart</Button>
                       </ListGroup.Item>


                   </Card>
               </Col>
           </Row>


        </div>
    )
}

export default ProductScreen
