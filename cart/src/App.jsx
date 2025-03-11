import Header from './assets/Components/Header.jsx';
import Shop from './assets/Components/Shop.jsx';
import { DUMMY_PRODUCTS } from './assets/dummy-products.js';
import Product from './assets/Components/Product.jsx';
import { CartContextProvider } from './store/Shopping-cart.jsx';


function App() {
  return (
    < CartContextProvider >
      <Header />
      <Shop  >
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider >
  );
}

export default App;
