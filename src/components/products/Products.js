import React from 'react';


function Products({
    name, description, img, price }) {
    return (
        <div className=" card py-3 product col-md-6" >
            <img src={img} className="card-img-top" alt="" width='300px' height='300px' />
            <div className="card-body">
                <h4 className="card-title">{name} <span className='float-right'>${price}</span></h4>
                <div className="row">
                    <span className="col-md-4 text-lead">Description:</span>
                    <p className="card-text text-muted col-md-8">{description}</p>
                </div>
                <button
                    onClick={() => window.alert('Product is added to cart')}
                    className="btn btn-dark btn-sm">
                    Add to Cart
                </button>
            </div>
        </div>

    )
}

export default Products
