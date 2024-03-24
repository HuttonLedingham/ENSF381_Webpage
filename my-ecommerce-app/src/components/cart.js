
import React from 'react';
import CartItem from './cartitems';

const Cart = ({ cart, removeFromCart }) => {
  const getTotalCost = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} onRemove={removeFromCart} />
      ))}
      <p>Total Cost: ${getTotalCost()}</p>
    </div>
  );
}

export default Cart;
