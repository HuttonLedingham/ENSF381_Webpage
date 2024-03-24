// ProductPage.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './productlist';
import Cart from './cart';
import Footer from './Footer';

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("useEffect for loading cart triggered");
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart.length !== 0) {
      console.log("Stored cart:", storedCart);
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    const index = cart.findIndex(item => item.id === itemToRemove.id);

    if (itemToRemove.quantity === 1) {
      const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
      setCart(updatedCart);
    } 
    else {
      const updatedCart = [...cart];
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  return (
    <div className="product-page">
      <Header />
      <table>
          <tr>
            <td><ProductList addToCart={addToCart} /></td>
            <td style={{ verticalAlign: 'top'}}><Cart cart={cart} removeFromCart={removeFromCart} /></td>
          </tr>
      </table>
      <Footer />
    </div>
  );
}

export default ProductPage;
