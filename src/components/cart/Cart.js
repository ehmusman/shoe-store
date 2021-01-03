import React from 'react'

function Cart() {
    return (
        <div className="container">
            <div className=" card py-3 cart" >
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://source.unsplash.com/random/300x200" className="card-img-top" alt="" />
                    </div>
                    <div className="col-md-8 row card-body">
                        <div className="col-md-6 flex flex-row">
                            <div className="card-title">Name</div>
                            <div className="card-body text-muted">
                                description
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            Quantity
                            <div className="input-group pt-3">
                                <div className="input-group-prepend">
                                    <button className="btn btn-dark"><i className="fas fa-minus"></i></button>
                                </div>
                                <input type="number" min="0"
                                    className="form-control" />
                                <div className="input-group-append">
                                    <button className="btn btn-dark"><i className="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 pl-3">
                            price
                        </div>
                        {/* <h4 className="card-title">asdfgh</h4> */}
                        {/* <div className="">
                            <span className="col-md-4 text-lead">Description:</span>
                            <p className="card-text text-muted col-md-8">Lorem ipsum dolor sit amet.</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
