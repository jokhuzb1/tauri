import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-8">POS System</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:bg-blue-600 p-2 rounded block">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/inventory" className="hover:bg-blue-600 p-2 rounded block">
            Inventory
          </Link>
        </li>
        <li>
          <Link to="/sales" className="hover:bg-blue-600 p-2 rounded block">
            Sales
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
