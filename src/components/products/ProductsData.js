import React, { useContext } from 'react'
import StoreContext from '../../Context/storeContext'
import Products from './Products'
function ProductsData() {
    const { Product } = useContext(StoreContext)
    console.log(Product)
    return (
        <div className='card-columns container'>
            {Product.map(item => (
                <Products
                    key={item.id}
                    name={item.productName}
                    description={item.description}
                    img={item.img}
                    price={item.price}
                    quantity={item.quantity}
                />
            ))}
        </div>
    )
}

export default ProductsData
