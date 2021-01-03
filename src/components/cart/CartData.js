import React, { useContext } from 'react'
import Cart from './Cart'
import StoreContext from '../../Context/storeContext'

function CartData() {
    const { cart } = useContext(StoreContext)
    console.log(cart)
    return (
        <div>
            <Cart />
        </div>
    )
}

export default CartData
