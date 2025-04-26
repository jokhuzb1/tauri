import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header: React.FC = () => {
  const { auth } = useAuth();

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">POS Store</h1>
      {!auth ? (
        <Link
          to={"/login"}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Login
        </Link>
      ) : (
        <Link
          to={"/login"}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Logout
        </Link>
      )}
    </header>
  );
};

export default Header;
