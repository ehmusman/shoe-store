import React from 'react'

function Products({
    name, description, img, price, quantity
}) {
    return (
        <div className=" card py-3" >
            <img src={img} className="card-img-top" alt="" width='300px' height='300px' />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{description}</p>
                <button className="btn btn-dark btn-sm">
                    Add to Cart
                </button>
            </div>
        </div>

    )
}

export default Products
