import React from "react";
import { useNavigate } from "react-router-dom";

const WalletSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-white p-4">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-indigo-700">
        Choose Your Gateway
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition" onClick={() => navigate("/rabex-dashboard")}>
          RABEX Dashboard
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition" onClick={() => navigate("/raaspay")}>
          Raaspay Interface
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition" onClick={() => navigate("/wallet")}>
          Raaswallet Interface
        </div>
      </div>
    </div>
  );
};

export default WalletSelector;
