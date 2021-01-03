import React, { useContext } from 'react'
import Cart from './Cart'
import StoreContext from '../../Context/storeContext'
import { Link } from 'react-router-dom'

function CartData() {
    const { cart } = useContext(StoreContext)
    // const filteredCart = cart.filter()
    return (
        <>
            {cart.length ? (
                <>
                    {cart.map(item => (
                        <Cart
                            key={item.id}
                            name={item.name}
                            img={item.img}
                            price={item.price}
                            description={item.description}
                        />
                    ))}
                    <div className="container my-3">
                        <div className="card">
                            <div className="card-header h1">Net Price</div>
                            <div className="card-body">
                                <div className="h3"> Your Total Bill is 5645</div>
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
