import axios from 'axios'
import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
 } from '../constants/cartConstants'

// https://redux.js.org/api/store#getstate
// getState() returns the current state tree of application; is equal to the last value returned by the store's reducer

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    // local storage can only have key value pairs in JSON string format

}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id, 
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}