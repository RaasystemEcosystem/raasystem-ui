import React from 'react';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const ActiveTrades = () => {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">📄 Active Trades</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-800 text-xs uppercase">
            <tr>
              <th className="px-4 py-2">Pair</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <td className="px-4 py-2">BTC/RAASK</td>
              <td className="px-4 py-2 flex items-center gap-1 text-green-500">
                <ArrowUpCircle className="w-4 h-4" /> Buy
              </td>
              <td className="px-4 py-2">0.5 BTC</td>
              <td className="px-4 py-2">₳ 1,200</td>
              <td className="px-4 py-2">
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-300 text-xs">Open</span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <td className="px-4 py-2">ETH/RAASK</td>
              <td className="px-4 py-2 flex items-center gap-1 text-red-500">
                <ArrowDownCircle className="w-4 h-4" /> Sell
              </td>
              <td className="px-4 py-2">2 ETH</td>
              <td className="px-4 py-2">₳ 1,500</td>
              <td className="px-4 py-2">
                <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-200 text-xs">Pending</span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <td className="px-4 py-2">RAASK/USD</td>
              <td className="px-4 py-2 flex items-center gap-1 text-green-500">
                <ArrowUpCircle className="w-4 h-4" /> Buy
              </td>
              <td className="px-4 py-2">1,000 RAASK</td>
              <td className="px-4 py-2">$ 2,900</td>
              <td className="px-4 py-2">
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-300 text-xs">Open</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ActiveTrades;
