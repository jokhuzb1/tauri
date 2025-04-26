import React, { useState } from "react";
import ProductList from "../components/ProductList";

interface Product {
  id: number;
  name: string;
  price: number;
}

const Inventory: React.FC = () => {
  const [
    products,
    // setProducts
  ] = useState<Product[]>([
    { id: 1, name: "Product 1", price: 50 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 20 },
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold">Inventory</h2>
      <ProductList products={products} />
    </div>
  );
};

export default Inventory;
