//Task 4

import React from "react";

const ProductItem = ({product}) => {
    return (
    <li>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Description:{product.description}</p>

    </li>
    )
}

export default ProductItem;