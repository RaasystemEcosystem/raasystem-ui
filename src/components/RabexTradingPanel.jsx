import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useRabexContract } from "./useRabexContract";

const RabexTradingPanel = () => {
  const rabexContract = useRabexContract();
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [bidPrice, setBidPrice] = useState("");
  const [askPrice, setAskPrice] = useState("");
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [txStatus, setTxStatus] = useState("");
  const [error, setError] = useState("");

  // Connect to MetaMask
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
        setConnected(true);
      } else {
        setError("MetaMask not detected");
      }
    } catch (err) {
      setError("Wallet connection failed");
      console.error(err);
    }
  };

  // Fetch sample market data (replace with actual contract call)
  const loadMarketData = async () => {
    try {
      setLoading(true);
      if (rabexContract) {
        // Replace with actual contract method like getOrderBook() or getAllTrades()
        const data = await rabexContract.getOrderBook(); // Example
        setMarketData(data);
      }
    } catch (err) {
      console.error("Failed to fetch market data:", err);
      setError("Error loading market data.");
    } finally {
      setLoading(false);
    }
  };

  // Submit a trade
  const handleTrade = async (type) => {
    try {
      if (!bidPrice || !askPrice) return;

      setTxStatus("Submitting...");
      const tx = type === "buy"
        ? await rabexContract.placeBid(ethers.parseUnits(bidPrice, 18))
        : await rabexContract.placeAsk(ethers.parseUnits(askPrice, 18));

      await tx.wait();
      setTxStatus("Trade submitted!");
      await loadMarketData();
    } catch (err) {
      console.error("Trade failed:", err);
      setTxStatus("Trade failed.");
    }
  };

  useEffect(() => {
    if (rabexContract && connected) {
      loadMarketData();
    }
  }, [rabexContract, connected]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📈 RABEX Trading Panel</h2>

      {!connected ? (
        <button onClick={connectWallet} className="bg-blue-500 text-white p-2 rounded">
          Connect Wallet
        </button>
      ) : (
        <div className="mb-4">Connected: {account}</div>
      )}

      <div className="flex gap-4 mb-4">
        <input
          type="number"
          placeholder="Bid Price"
          value={bidPrice}
          onChange={(e) => setBidPrice(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Ask Price"
          value={askPrice}
          onChange={(e) => setAskPrice(e.target.value)}
          className="p-2 border rounded"
        />
        <button onClick={() => handleTrade("buy")} className="bg-green-500 text-white p-2 rounded">
          Buy
        </button>
        <button onClick={() => handleTrade("sell")} className="bg-red-500 text-white p-2 rounded">
          Sell
        </button>
      </div>

      {txStatus && <div className="mb-2 text-sm text-blue-600">{txStatus}</div>}
      {error && <div className="mb-2 text-sm text-red-600">{error}</div>}

      {loading ? (
        <div>Loading market data...</div>
      ) : (
        <div>
          <h3 className="font-semibold mb-2">📊 Market Data:</h3>
          <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
            {JSON.stringify(marketData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default RabexTradingPanel;
