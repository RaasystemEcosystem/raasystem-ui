// src/App.jsx
import React from "react";
import { WalletProvider } from "./context/WalletContext";
import WalletActions from "./components/WalletActions";

export default function App() {
  return (
    <WalletProvider>
      <div className="App">
        <h1>Hello Raaskoin Wallet</h1>
        <WalletActions />
      </div>
    </WalletProvider>
  );
}
