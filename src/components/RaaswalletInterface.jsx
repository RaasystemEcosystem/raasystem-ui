import React from "react";
import WalletConnector from "./WalletConnector";

const RaaswalletInterface = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Raaswallet: Your Secure Vault</h2>
      <WalletConnector />
      <div className="mt-6 text-sm text-gray-500">
        Coming soon: Multi-asset non-custodial wallet and token manager.
      </div>
    </div>
  );
};

export default RaaswalletInterface;
