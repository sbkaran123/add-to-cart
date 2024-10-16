import React from 'react';

const CartItem = ({ item, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="border p-4 mb-2">
      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
      <h2 className="text-lg">{item.title}</h2>
      <p>Price: ${item.price}</p>
      <div className="flex items-center">
        <button onClick={() => decreaseQuantity(item.id)} className="p-2">-</button>
        <p className="mx-2">{item.quantity}</p>
        <button onClick={() => increaseQuantity(item.id)} className="p-2">+</button>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white p-2 mt-2">
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;
