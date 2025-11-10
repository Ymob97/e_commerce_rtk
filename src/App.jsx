import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import SuperCoin from './Components/SuperCoin';

function App() {
  return (
    <div className="App">
      <h1>Mon E-Commerce avec Redux Toolkit</h1>
      <ProductList />
      <ShoppingCart />
      <SuperCoin /> {/* Affiche les super coins */}
    </div>
  );
}

export default App;

