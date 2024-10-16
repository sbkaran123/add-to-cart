import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p>{product.price} $</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white p-2 mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
