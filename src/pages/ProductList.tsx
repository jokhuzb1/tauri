import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../firebase/products";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name?: string;
  category?: string;
  price?: number;
  stock?: number;
  stockBatches?: { [key: string]: any }[];
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    const data = await getProducts();
    setProducts(data);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Product List</h2>
        <Link
          to={"/add-product"}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Add Product
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-medium">Name</th>
            <th className="px-4 py-2 text-left font-medium">Category</th>
            <th className="px-4 py-2 text-left font-medium">Price</th>
            <th className="px-4 py-2 text-left font-medium">Stock</th>
            <th className="px-4 py-2 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <tr className="hover:bg-gray-50">
                <td
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => toggleExpand(product.id)}
                >
                  {product.name}
                </td>
                <td className="px-4 py-2">{product.category || "-"}</td>
                <td className="px-4 py-2">
                  ${product.price?.toFixed(2) || "0.00"}
                </td>
                <td className="px-4 py-2">{product.stock || 0}</td>
                <td className="px-4 py-2">
                  <button
                    className="text-blue-600 hover:underline mr-2"
                    onClick={() => alert("TODO: Edit")}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              {expandedId === product.id &&
                product.stockBatches &&
                product.stockBatches?.length > 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-2 bg-gray-50">
                      <div>
                        <h4 className="font-semibold mb-2">Stock Batches:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                          {product.stockBatches.map((batch, index) => (
                            <li key={index}>
                              <strong>Qty:</strong> {batch.quantity}{" "}
                              {batch.batchNumber && (
                                <>
                                  | <strong>Batch#:</strong> {batch.batchNumber}
                                </>
                              )}
                              {batch.date && (
                                <>
                                  {" "}
                                  | <strong>Date:</strong> {batch.date}
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </td>
                  </tr>
                )}
            </React.Fragment>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan={5} className="px-4 py-4 text-center text-gray-400">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
