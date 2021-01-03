import React, { useContext } from 'react'
import StoreContext from '../../Context/storeContext'
import Products from './Products'
function ProductsData() {
    const { Product } = useContext(StoreContext)
    console.log(Product)
    return (
        <div className="container">
            <div className='row '>
                {Product.map(item => (
                    <Products
                        key={item.id}
                        name={item.productName}
                        description={item.description}
                        img={item.img}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsData
