import React, { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "./useDarkMode";
import TokenCard from "./TokenCard";
import { Button } from "@/components/ui/button";
import { Coins, Send, Wallet } from "lucide-react";
import WalletModalContent from "./components/modals/WalletModalContent";
import AiEngineDashboard from "./AiEngineDashboard";
import { Card, CardContent } from "@/components/ui/card";

const tokens = [
  {
    name: "Raaskoin",
    symbol: "RAAS",
    balance: 1224,
    goldEquivalent: 1224 * 0.075,
    priceHistory: [0.07, 0.072, 0.075, 0.074, 0.076, 0.075],
  },
  {
    name: "Raastoken",
    symbol: "RAAK",
    balance: 512,
    goldEquivalent: 512 * 0.075,
    priceHistory: [0.05, 0.051, 0.052, 0.053, 0.052, 0.051],
  },
  {
    name: "Tether USD (XDC)",
    symbol: "USDT-XDC",
    balance: 1000,
    goldEquivalent: 1000 * 0.075,
    priceHistory: [1, 1, 1, 1, 1, 1],
  },
];

export default function Dashboard() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [modalType, setModalType] = useState<"send" | "receive" | "swap" | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const openModal = (type: "send" | "receive" | "swap") => setModalType(type);
  const closeModal = () => setModalType(null);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } else {
        alert("MetaMask is not installed!");
      }
    } catch (err) {
      console.error("Wallet connection error:", err);
    }
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      }
    };
    checkConnection();
  }, []);

  return (
    <>
      <div className="flex justify-between p-4 items-center">
        <DarkModeToggle darkMode={darkMode} toggle={() => setDarkMode(!darkMode)} />
        {walletAddress ? (
          <div className="text-sm font-mono text-gray-500 dark:text-gray-300">
            Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </div>
        ) : (
          <Button onClick={connectWallet} className="px-4 py-2 text-sm">
            Connect Wallet
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {tokens.map((token, i) => (
          <TokenCard
            key={token.symbol}
            name={token.name}
            symbol={token.symbol}
            balance={token.balance}
            goldEquivalent={token.goldEquivalent}
            priceHistory={token.priceHistory}
            animationDelay={i * 0.1}
          />
        ))}

        {/* AI Engine Dashboard */}
        <div className="col-span-1 md:col-span-3">
          <Card className="rounded-2xl shadow-xl p-6">
            <CardContent>
              <AiEngineDashboard />
            </CardContent>
          </Card>
        </div>

        {/* Send, Receive, Swap Buttons */}
        <div className="col-span-1 md:col-span-3">
          <Card className="rounded-2xl shadow-xl p-6">
            <CardContent className="flex justify-around">
              <Button onClick={() => openModal("send")} className="flex gap-2 px-6 py-4 text-lg">
                <Send size={20} /> Send
              </Button>
              <Button onClick={() => openModal("receive")} className="flex gap-2 px-6 py-4 text-lg">
                <Wallet size={20} /> Receive
              </Button>
              <Button onClick={() => openModal("swap")} className="flex gap-2 px-6 py-4 text-lg">
                <Coins size={20} /> Swap
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <WalletModalContent modalType={modalType} closeModal={closeModal} />
    </>
  );
}
