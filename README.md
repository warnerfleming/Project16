# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


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
