import React, { useState, useContext, useEffect } from 'react'
import StoreContext from '../../Context/storeContext'

function Cart({
    id, name, img, price, description, totalAmount }) {
    const { updateAmount } = useContext(StoreContext)

    const [count, setCount] = useState(1)
    useEffect(() => {
        updateAmount({
            type: 'INCREMENT_AMOUNT',
            payload: {
                id,
                name,
                img,
                price,
                totalAmount: price * count,
                description,
                quantity: count
            }
        })
    }, [count])
    const increment = () => {
        setCount(1 + count)
    }
    const decrement = () => {
        setCount(Math.max(1, count - 1))
    }
    const onChange = (e) => {
        setCount(Math.max(1, e.target.value))
    }
    return (
        <div className="container">
            <div className=" card py-3 cart" >
                <div className="row">
                    <div className="col-md-4">
                        <img src={img} height="300px" className="card-img-top" alt="" />
                    </div>
                    <div className="col-md-8 row card-body">
                        <div className="col-md-5 flex flex-row">
                            <div className="card-title">{name}</div>
                            <div className="card-body text-muted">
                                description: {description}
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            Quantity
                            <div className="input-group pt-3">
                                <div className="input-group-prepend">
                                    <button className="btn btn-dark"
                                        onClick={decrement}
                                    ><i className="fas fa-minus"></i></button>
                                </div>
                                <input type="number" min="0"
                                    value={count}
                                    onChange={onChange}
                                    className="form-control" />
                                <div className="input-group-append">
                                    <button className="btn btn-dark"
                                        onClick={increment}
                                    ><i className="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 pl-3">
                            price: ${totalAmount}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart
