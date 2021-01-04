import React, { useContext } from 'react'
import Cart from './Cart'
import StoreContext from '../../Context/storeContext'
import { Link } from 'react-router-dom'

function CartData() {
    const { cart } = useContext(StoreContext)
    const total = cart.map(amount => amount.totalAmount)
    console.log(total)
    return (
        <>
            {cart.length ? (
                <>
                    {cart.map(item => (
                        <Cart
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            img={item.img}
                            price={item.price}
                            description={item.description}
                            quantity={item.quantity}
                            totalAmount={item.totalAmount}
                        />
                    ))}
                    <div className="container my-3">
                        <div className="card">
                            <div className="card-header h1">Net Price</div>
                            <div className="card-body">
                                <div className="h3"> Your Total Bill is ${total.length !== 0 && total.reduce((a, b) => a + b)}</div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                    <div className="container">
                        <div className="display-4 text-danger">
                            Your Cart is empty,
                        </div>
                        <div className="text-muted h5">
                            <Link to='/products'>
                                Go to Products
                            </Link>
                        </div>
                    </div>
                )}
        </>
    )
}

export default CartData
