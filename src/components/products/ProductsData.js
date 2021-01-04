import React, { useContext } from 'react'
import StoreContext from '../../Context/storeContext'
import Products from './Products'
function ProductsData() {
    const { Product } = useContext(StoreContext)
    return (
        <div className="container">
            <div className='row '>
                {Product.map(item => (
                    <Products
                        key={item.id}
                        id={item.id}
                        name={item.productName}
                        description={item.description}
                        img={item.img}
                        price={item.price}
                        quantity={item.quantity}
                        totalAmount={item.totalAmount}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsData
