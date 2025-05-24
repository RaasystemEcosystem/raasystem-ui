import React from "react";
import WalletConnector from "./WalletConnector";

const RaaspayInterface = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Raaspay Merchant Gateway</h2>
      <WalletConnector />
      <div className="mt-6 text-sm text-gray-500">
        Coming soon: Seamless crypto-to-fiat settlement with live gold conversion.
      </div>
    </div>
  );
};

export default RaaspayInterface;
