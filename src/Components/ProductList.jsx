import React from 'react';
import './ProductList.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';// Action pour ajouter un produit au panier

const ProductList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems); // Obtenir les articles du panier globalement

  const products = [
    { id: 1, name: 'Produit A', price: 60 },
    { id: 2, name: 'Produit B', price: 75 },
    { id: 3, name: 'Produit C', price: 30 },
  ];

  const handleAddToCart = product => {
    dispatch(addItemToCart(product));// Ajouter le produit au panier
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Produits</h2>
      <ul className="product-list-items">
        {products.map(product => (
            <li key={product.id} className="product-list-item">
            <span>{product.name} - ${product.price}</span>
            <button
                className={`add-to-cart-btn ${cartItems.some(item => item.id === product.id) ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={cartItems.some(item => item.id === product.id)} // Désactiver si déjà dans le panier
              >
                {cartItems.some(item => item.id === product.id) ? 'Ajouté' : 'Ajouter au panier'}
            </button>
            </li>
        ))}

      </ul>
    </div>
  );
};

export default ProductList;