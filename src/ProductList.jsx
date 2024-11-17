// Task 3

import React from `react`
import ProductItem from `./ProductItem.jsx`

const ProductList = ({products}) => {
    return(
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((item) => (
                    <ProductItem key={products.id} product={product}/>     
                   ))}
            </ul>
        </div>
    )
}

export default ProductList;