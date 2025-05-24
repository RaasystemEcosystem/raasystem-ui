import React, { useState } from "react";

export default function SendForm() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Sending ${amount} tokens to ${recipient}`);
    // TODO: Replace alert with real send logic
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label>
        Recipient Address
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Enter recipient wallet address"
          className="w-full p-2 border rounded"
          required
        />
      </label>
      <label>
        Amount
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount to send"
          min="0"
          step="any"
          className="w-full p-2 border rounded"
          required
        />
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send Tokens
      </button>
    </form>
  );
}
