// import React, { useState, useEffect } from 'react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import SearchBox from '../components/SearchBox'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'

// import axios from 'axios'
// not making API call here anymore

// import products from '../products'
// this was the temporary products import

// useState docs
// https://reactjs.org/docs/hooks-state.html

// useEffect docs
// https://reactjs.org/docs/hooks-effect.html
// useEffect gets triggered every time the component loads (or when a state attribute/value gets updated)

// axios docs
// https://axios-http.com/

function HomeScreen({history}) {

    // const [products, setProducts] = useState([])
    // local state not needed anymore
    
    //function is async and await returns the promise of the api url, data is destructured and then state is reset
    // empty array at end so useEffect updates when componend loads, not when state is changed

    // useEffect(() => {
    //     function fetchProducts() {
    //         axios.get('http://127.0.0.1:8000/api/products').then(res => {
    //             console.log(res.data);  
    //     fetchProducts()
    // }, [])
    // below code is better


    // useEffect(() => {
    //     console.log('useEffect triggered')
    //     async function fetchProducts() {
    //         const { data } = await axios.get('/api/products/')
    //         setProducts(data)
    //     }
    //     fetchProducts()
    // }, [])
    // getting rid of API call here bc it is being made from productActions now


    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)

    const {error, loading, products, page, pages} = productList

    let keyword = history.location.search
    console.log(keyword)

    useEffect(() => {
        dispatch(listProducts(keyword))
    }, [dispatch, keyword])

    // const products = []
    // solved no products error

    return (
        <div>

            {/* <SearchBox /> */}
            
            {/* cutting the carousel for now */}
            {/* {!keyword && 
                <Card>
                    <Card.Header as="h3">Products with the most <i class="fas fa-star"></i>'s</Card.Header>
                    <ProductCarousel />
                </Card>
                } */}
            {/* if no keyword, output carousel condition kills the carousel if using the searchbox  */}
            {/* put on a card for the title */}

            {/* <br /><br />
            <h3>Latest Products</h3> */}

            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                             </Col>
                        ))}
                    </Row>

                    <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
            {/* if loading render <h2>Loading...</h2>, if there is an error render the error, or if not render the Row  */}


            {/* iterate over products and put each one in a column */}
            {/* the parameters in Col is bootstrap for how many columns on what size screen */}
            {/* the key={product._id} gets rid of a react error that warns against not having unique keys when iterating over something, this is solved by using the unique attribute _id */}
            {/* <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        // <h3>{product.name}</h3>

                        // Product components being passed product as a prop
                        <Product product={product} />
                    </Col>
                ))}
            </Row> */}
            {/* relocated this above */}
        </div>
    )
}

export default HomeScreen
