import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link to="/cart" className="block mt-4 bg-blue-500 text-white p-2">Go to Cart</Link>
    </div>
  );
};

export default ProductPage;
