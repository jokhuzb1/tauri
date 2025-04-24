import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-lg text-gray-600">${product.price}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full w-full">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
