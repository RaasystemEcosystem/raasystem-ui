import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">RABEX Trading Dashboard</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#" className="hover:text-yellow-400">Markets</a></li>
          <li><a href="#" className="hover:text-yellow-400">Trades</a></li>
          <li><a href="#" className="hover:text-yellow-400">Wallet</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
