import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full p-4 shadow-md">
      <nav className="space-y-4">
        <div className="font-semibold text-lg mb-4">Menu</div>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block px-3 py-2 rounded hover:bg-gray-700">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block px-3 py-2 rounded hover:bg-gray-700">
              Order Book
            </a>
          </li>
          <li>
            <a href="#" className="block px-3 py-2 rounded hover:bg-gray-700">
              Active Trades
            </a>
          </li>
          <li>
            <a href="#" className="block px-3 py-2 rounded hover:bg-gray-700">
              Market Data
            </a>
          </li>
          <li>
            <a href="#" className="block px-3 py-2 rounded hover:bg-gray-700">
              Wallet
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
