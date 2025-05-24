import React, { useState } from "react";

const WalletConnector = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask not detected. Please install it to use this feature.");
    }
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow border max-w-md mx-auto">
      <h3 className="text-lg font-medium mb-3">
        {isConnected ? "Wallet Connected" : "Connect Your Wallet"}
      </h3>
      <button
        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        onClick={connectWallet}
      >
        {isConnected
          ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
          : "Connect Wallet"}
      </button>
    </div>
  );
};

export default WalletConnector;
