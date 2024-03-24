// ProductItem.js
import React, { useState } from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} style={{width:"250px"}}/>
      <h3 
        onMouseEnter={toggleDescription}
        onMouseLeave={toggleDescription}
      >
        {product.name}
      </h3>
      {showDescription && <p>{product.description}</p>}
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
