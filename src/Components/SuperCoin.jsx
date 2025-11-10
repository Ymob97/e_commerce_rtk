import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SuperCoin = () => {
  // État pour les super coins
  const [superCoins, setSuperCoins] = useState(0);

  // Récupérer les articles du panier depuis Redux
  const cartItems = useSelector(state => state.cart.cartItems);

  // Calculer le montant total
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Mettre à jour les super coins en fonction du montant total
  useEffect(() => {
    if (totalAmount >= 100 && totalAmount < 200) {
      setSuperCoins(10);
    } else if (totalAmount >= 200 && totalAmount < 300) {
      setSuperCoins(20);
    } else if (totalAmount >= 300) {
      setSuperCoins(30);
    } else {
      setSuperCoins(0);
    }
  }, [totalAmount]);

  return (
    <div className="super-coin">
      🎉 Super Coins gagnés : {superCoins}
    </div>
  );
};

export default SuperCoin;
