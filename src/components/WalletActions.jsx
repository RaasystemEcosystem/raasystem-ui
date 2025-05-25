// src/components/WalletActions.jsx

import React from "react";
import { useWallet } from "../context/WalletContext";
import QRCode from "qrcode.react";

export default function WalletActions() {
  const { connectWallet, address, balances, isConnected } = useWallet();

  return (
    <div>
      {!isConnected ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <p><strong>Address:</strong> {address}</p>
          <p><strong>RAAS:</strong> {balances.RAAS?.toFixed(2) ?? "0.00"}</p>
          <p><strong>RAAK:</strong> {balances.RAAK?.toFixed(2) ?? "0.00"}</p>
          <p><strong>USDT-XDC:</strong> {balances.USDT_XDC?.toFixed(2) ?? "0.00"}</p>
          <QRCode value={address} size={128} />
        </div>
      )}
    </div>
  );
}
