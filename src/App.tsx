import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuth } from "./context/AuthContext";

const App: React.FC = () => {
  const { auth } = useAuth();

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Toaster />

        {auth && <Sidebar />}

        <div className="flex-1 flex flex-col">
          {auth && <Header />}

          <main className="flex-1 p-6 overflow-auto">
            <Routes>
              {!auth ? (
                <>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="*" element={<Navigate to="/login" />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/inventory" element={<Inventory />} />
                  <Route path="/sales" element={<Sales />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </>
              )}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
