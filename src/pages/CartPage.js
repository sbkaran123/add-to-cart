import React from 'react';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedTotal = total * 0.9;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))}
          <h2 className="text-xl mt-4">
            Total: ${total.toFixed(2)} (Discount: 10%) - ${discountedTotal.toFixed(2)}
          </h2>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <Link to="/" className="block mt-4 bg-blue-500 text-white p-2">Back to Products</Link>
    </div>
  );
};

export default CartPage;
