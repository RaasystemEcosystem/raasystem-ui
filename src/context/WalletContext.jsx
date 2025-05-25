// src/context/WalletContext.jsx

import React, { createContext, useContext, useState, useEffect } from "react";
import Web3 from "web3";
import ERC20ABI from "../abis/ERC20.json"; // Make sure this file exists and contains a standard ERC20 ABI

const WalletContext = createContext();

const TOKEN_ADDRESSES = {
  RAAS: "xdc7e88Fb6dC8E1Df1099e92a806cEfC58f5F466993",   // Raaskoin
  RAAK: "xdc55CDF6069393F76E42323C046baEF62a818EF6d1",   // Raastoken
  USDT_XDC: "xdcD4b5f10d61916bd6e0860144a91ac658de8a1437", // xUSDT (Wanchain Bridged USDT)
};
export const WalletProvider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);
  const [balances, setBalances] = useState({});
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = window.ethereum;
        await provider.request({ method: "eth_requestAccounts" });
        const web3Instance = new Web3(provider);
        const accounts = await web3Instance.eth.getAccounts();
        setWeb3(web3Instance);
        setAddress(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask or XDC-compatible wallet not found.");
    }
  };

  const fetchBalances = async () => {
    if (!web3 || !address) return;

    const newBalances = {};
    for (const [symbol, tokenAddress] of Object.entries(TOKEN_ADDRESSES)) {
      if (!tokenAddress) {
        newBalances[symbol] = 0;
        continue;
      }

      try {
        const tokenContract = new web3.eth.Contract(ERC20ABI, tokenAddress);
        const rawBalance = await tokenContract.methods.balanceOf(address).call();
        newBalances[symbol] = parseFloat(web3.utils.fromWei(rawBalance));
      } catch (error) {
        console.error(`Error fetching ${symbol} balance:`, error);
        newBalances[symbol] = 0;
      }
    }

    setBalances(newBalances);
  };

  useEffect(() => {
    if (web3 && address) {
      fetchBalances();
    }
  }, [web3, address]);

  return (
    <WalletContext.Provider value={{ connectWallet, address, balances, isConnected }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
