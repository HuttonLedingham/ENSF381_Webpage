// CartItem.js
import React from 'react';

const CartItem = ({ item, onRemove }) => {

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} style={{width:"250px"}}/>
      <div>
        <p>{item.name}</p>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${item.price * item.quantity}</p>
        <button onClick={() => onRemove(item)}>Remove</button>      </div>
    </div>
  );
}

export default CartItem;
