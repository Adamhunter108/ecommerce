import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

// https://react-bootstrap.github.io/components/cards/

function Product({ product }) {
    return (

        <Card className="my-3 p-3 rounded">
            {/* <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </a> */}
            
            {/* using Link instead of a tags so page doesnt refresh */}

            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>

            <Card.Body>

                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        {/* {product.rating} from {product.numReviews} reviews <---old code before Rating component */}
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>

            </Card.Body>
            
        </Card>
    )
}

export default Product
