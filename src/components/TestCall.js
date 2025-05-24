import React from "react";
import { useRabexAIEngineContract } from "../hooks/useRabexAIEngineContract";

const TestCall = () => {
  const contract = useRabexAIEngineContract();

  const handleTestCall = async () => {
    try {
      const bestBid = await contract.methods.getBestBid().call();
      console.log("Best Bid:", bestBid);
      alert("Best Bid: " + bestBid);
    } catch (error) {
      console.error("Test call failed:", error);
      alert("Failed to call contract: " + error.message);
    }
  };

  return (
    <div className="p-4">
      <button onClick={handleTestCall} className="bg-blue-600 text-white px-4 py-2 rounded">
        Run Test Call
      </button>
    </div>
  );
};

export default TestCall;
