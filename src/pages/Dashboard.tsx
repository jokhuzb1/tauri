import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold">Dashboard</h2>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="font-semibold">Total Sales</h4>
            <p className="text-xl">$2000</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-semibold">Total Inventory</h4>
            <p className="text-xl">150 Items</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h4 className="font-semibold">Pending Orders</h4>
            <p className="text-xl">5 Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
