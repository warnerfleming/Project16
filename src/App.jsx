//Task 2

import { useState } from 'react'
import ProductList from `./ProductList.jsx`
import AddProductForm from `./AddProductForm.jsx`

const App = () =>{
  const [product, set] = useState([
{id: 1, name:`Remote`, price: 20, description: `Used with Sony V900 Models`},
{id: 2, name:`TV`, price: 400, description: `Latest Sony Model`},
{id: 3, name:`DvD Player`, price: 150, description: `T12 Model`},
{id: 4, name:`TV Stand`, price: 60, description: `Holds all Sony Models`}
])

const addProduct = (newProduct) => {
  setProducts([...products, {...newProduct}]);
};

return (
  <div>
    <h1>Product Dashboard</h1>
    <ProductList products={products} /> 
    <AddProductForm addProduct={addProduct} /> 
  </div>
);
};

export default App