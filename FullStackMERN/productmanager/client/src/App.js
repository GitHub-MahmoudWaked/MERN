import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import UpdateProduct from './views/UpdateProduct';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products/"/>
        <ProductDetails path="products/:id" />
        <UpdateProduct path="products/:id/edit"/>
      </Router>
    </div>
  );
}
export default App;