import React from 'react';

const WalletConnect = () => {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 mt-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">🔗 Wallet Connection</h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="mb-3 sm:mb-0">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Connect your wallet to start trading on RABEX.
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl transition-all">
          Connect Wallet
        </button>
      </div>
    </section>
  );
};

export default WalletConnect;
