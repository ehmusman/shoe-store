import React, { useReducer } from 'react';
import StoreReducer from './storeReducer'
import StoreContext from './storeContext'
import Control from '../components/Control/Control'

const StoreState = (props) => {
    const initialState = {
        initialValues: [
            {
                id: 1, productName: 'Deck Shoes', price: 999, quantity: 5, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imageone
            },
            {
                id: 2, productName: 'Dress Shoes', price: 989, quantity: 5, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagetwo
            },
            {
                id: 3, productName: 'Court Shoes', price: 899, quantity: 5, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagethree
            },
            {
                id: 4, productName: 'Cow Boy Shoes', price: 799, quantity: 5, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagefour
            },
            {
                id: 5, productName: 'Golf Shoes', price: 699, quantity: 5, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagefive
            },
            {
                id: 6, productName: 'Boat Shoes', price: 1999, quantity: 5, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagesix
            },
            {
                id: 7, productName: 'Beach Shoes', price: 2999, quantity: 5, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imageseven
            },
            {
                id: 8, productName: 'Flip Shoes', price: 3999, quantity: 5, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imageeight
            },
            {
                id: 9, productName: 'cycling Shoes', price: 2199, quantity: 5, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagenine
            },
            {
                id: 10, productName: 'Clogs Shoes', price: 3199, quantity: 5, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imageten
            },
            {
                id: 11, productName: 'Ballet Shoes', price: 999, quantity: 5, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imageeleven
            },
            {
                id: 12, productName: 'Bowling Shoes', price: 1599, quantity: 5, description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis?', img: Control.imagetwelve
            }
        ]

    }

    const [state, dispatch] = useReducer(StoreReducer, initialState)
    // dispatch({
    //     type: action.type,
    //     payload: action.payload
    // })


    return <StoreContext.Provider
        value={{
            Product: state.initialValues,
            model: state.productAddedModel
        }}>
        {props.children}
    </StoreContext.Provider>

}

export default StoreState;