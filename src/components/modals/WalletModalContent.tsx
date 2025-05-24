import React from "react";
import WalletModal from "./WalletModal"; // Adjust path if needed
import SendForm from "./SendForm";

interface WalletModalContentProps {
  modalType: "send" | "receive" | "swap" | null;
  closeModal: () => void;
}

export default function WalletModalContent({ modalType, closeModal }: WalletModalContentProps) {
  if (!modalType) return null;

  return (
    <WalletModal open={!!modalType} onClose={closeModal} title={modalType.toUpperCase()}>
      {modalType === "send" && <SendForm />}
      {modalType === "receive" && (
        <div>
          <p>Your wallet address for receiving tokens:</p>
          <code className="break-all bg-gray-100 p-2 rounded block mt-2">
            0xYourWalletAddressHere
          </code>
        </div>
      )}
      {modalType === "swap" && (
        <div>
          <p>Swap functionality coming soon!</p>
        </div>
      )}
    </WalletModal>
  );
}
