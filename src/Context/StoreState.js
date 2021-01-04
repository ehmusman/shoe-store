import React, { useReducer } from 'react';
import StoreReducer from './storeReducer'
import StoreContext from './storeContext'
import Control from '../components/Control/Control'

const StoreState = (props) => {
    const initialState = {
        products: [
            {
                id: 1, quantity: 0, totalAmount: 0, productName: 'Deck Shoes', price: 999, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imageone
            },
            {
                id: 2, quantity: 0, totalAmount: 0, productName: 'Dress Shoes', price: 989, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagetwo
            },
            {
                id: 3, quantity: 0, totalAmount: 0, productName: 'Court Shoes', price: 899, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagethree
            },
            {
                id: 4, quantity: 0, totalAmount: 0, productName: 'Cow Boy Shoes', price: 799, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagefour
            },
            {
                id: 5, quantity: 0, totalAmount: 0, productName: 'Golf Shoes', price: 699, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagefive
            },
            {
                id: 6, quantity: 0, totalAmount: 0, productName: 'Boat Shoes', price: 1999, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagesix
            },
            {
                id: 7, quantity: 0, totalAmount: 0, productName: 'Beach Shoes', price: 2999, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imageseven
            },
            {
                id: 8, quantity: 0, totalAmount: 0, productName: 'Flip Shoes', price: 3999, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imageeight
            },
            {
                id: 9, quantity: 0, totalAmount: 0, productName: 'cycling Shoes', price: 2199, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagenine
            },
            {
                id: 10, quantity: 0, totalAmount: 0, productName: 'Clogs Shoes', price: 3199, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imageten
            },
            {
                id: 11, quantity: 0, totalAmount: 0, productName: 'Ballet Shoes', price: 999, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imageeleven
            },
            {
                id: 12, quantity: 0, totalAmount: 0, productName: 'Bowling Shoes', price: 1599, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagetwelve
            }
        ],
        cart: []
    }

    const [state, dispatch] = useReducer(StoreReducer, initialState)
    const addProductToCart = (action) => {
        dispatch({
            type: action.type,
            payload: action.payload
        })
    }
    const updateAmount = (action) => {
        dispatch({
            type: action.type,
            payload: action.payload
        })
    }



    return <StoreContext.Provider
        value={{
            Product: state.products,
            cart: state.cart,
            addProductToCart,
            updateAmount
        }}>
        {props.children}
    </StoreContext.Provider>

}

export default StoreState;