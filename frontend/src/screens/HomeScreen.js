import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'



function HomeScreen() {
    return (
        <div>
            <h1>Latest Products</h1>


            {/* iterate over products and put each one in a column */}
            {/* the parameters in Col is bootstrap for how many columns on what size screen */}
            {/* the key={product._id} gets rid of a react error that warns against not having unique keys when iterating over something, this is solved by using the unique attribute _id */}
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        {/* <h3>{product.name}</h3> */}

                        {/* Product components being passed product as a prop */}
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
