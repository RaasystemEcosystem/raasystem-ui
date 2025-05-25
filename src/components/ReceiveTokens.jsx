// src/components/ReceiveTokens.jsx
import React from "react";
import { useWallet } from "../context/WalletContext";

export default function ReceiveTokens() {
  const { address, connectWallet, isConnected } = useWallet();

  const copyToClipboard = () => {
    if (!address) return;
    navigator.clipboard.writeText(address);
    alert("Wallet address copied to clipboard!");
  };

  if (!isConnected) {
    return (
      <button
        onClick={connectWallet}
        className="btn btn-primary"
      >
        Connect Wallet
      </button>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <h3>Your Wallet Address</h3>
      <p style={{ wordBreak: "break-all", fontFamily: "monospace" }}>{address}</p>
      <button onClick={copyToClipboard} className="btn btn-secondary" style={{ marginBottom: 10 }}>
        Copy Address
      </button>
      <div>
        <QRCode value={address} size={180} />
      </div>
    </div>
  );
}
