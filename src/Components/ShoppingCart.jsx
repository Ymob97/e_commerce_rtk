import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Supposons que vous avez des créateurs d'actions pour augmenter et diminuer la quantité d'articles
import './ShoppingCart.css'; // Importer le fichier CSS pour les styles spécifiques au composant

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveItem = itemId => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = itemId => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseItemQuantity(itemId));
  };

  return (
    <>
      <div className="shopping-cart">
        <h2 className="shopping-cart-title">Panier</h2>
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <div className="quantity-controls">
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span> {item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Retirer</button>
            </li>
          ))}
        </ul>
        <button className="clear-cart-btn" onClick={handleClearCart}>Vider le Panier</button>
      </div>
      <div>{totalAmount ? <div>'Le montant total est {totalAmount}</div> : ''}</div>
    </>
  );
};

export default ShoppingCart;