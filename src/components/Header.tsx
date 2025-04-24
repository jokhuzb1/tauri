import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Store Name</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </header>
  );
};

export default Header;
