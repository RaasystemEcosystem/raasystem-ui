import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

const OrderBook = () => {
  const bids = [
    { price: '₳ 1,195', amount: '0.3 BTC' },
    { price: '₳ 1,190', amount: '1.0 BTC' },
    { price: '₳ 1,185', amount: '0.6 BTC' },
  ];

  const asks = [
    { price: '₳ 1,205', amount: '0.2 BTC' },
    { price: '₳ 1,210', amount: '0.8 BTC' },
    { price: '₳ 1,215', amount: '0.5 BTC' },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">📘 Order Book</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bids */}
        <div>
          <h3 className="text-sm font-semibold text-green-600 dark:text-green-300 flex items-center gap-1">
            <ArrowUp className="w-4 h-4" /> Bids
          </h3>
          <ul className="mt-2 space-y-2">
            {bids.map((bid, index) => (
              <li key={index} className="flex justify-between bg-green-50 dark:bg-green-800 px-3 py-2 rounded-md text-sm hover:bg-green-100 dark:hover:bg-green-700 transition">
                <span>{bid.amount}</span>
                <span className="font-semibold text-green-700 dark:text-green-200">{bid.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Asks */}
        <div>
          <h3 className="text-sm font-semibold text-red-600 dark:text-red-300 flex items-center gap-1">
            <ArrowDown className="w-4 h-4" /> Asks
          </h3>
          <ul className="mt-2 space-y-2">
            {asks.map((ask, index) => (
              <li key={index} className="flex justify-between bg-red-50 dark:bg-red-800 px-3 py-2 rounded-md text-sm hover:bg-red-100 dark:hover:bg-red-700 transition">
                <span>{ask.amount}</span>
                <span className="font-semibold text-red-700 dark:text-red-200">{ask.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OrderBook;
