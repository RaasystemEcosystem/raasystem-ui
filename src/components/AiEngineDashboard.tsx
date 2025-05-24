import React, { useEffect, useState } from 'react';

interface Order {
  type: string;
  price: number;
  quantity: number;
}

interface AiData {
  predicted_price: number;
  spread: number;
  volatility: number;
  order_book: {
    bid: Order;
    ask: Order;
  };
}

export default function AiEngineDashboard() {
  const [data, setData] = useState<AiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAiData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('http://localhost:3000/api/run-ai-engine', { cache: 'no-store' });
      if (!response.ok) throw new Error('Network response was not ok');
      const json = await response.json();
      setData(json.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAiData();
    const interval = setInterval(fetchAiData, 5000); // auto-refresh every 5 seconds
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  if (loading) return <p>Loading AI engine data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mt-4 shadow-xl">
      <h2 className="text-xl font-bold mb-2">AI Engine Dashboard</h2>
      <p><strong>Predicted Price:</strong> {data?.predicted_price}</p>
      <p><strong>Spread:</strong> {data?.spread}</p>
      <p><strong>Volatility:</strong> {data?.volatility}</p>
      <div className="mt-2">
        <h3 className="font-semibold">Order Book</h3>
        <p><strong>Bid:</strong> {data?.order_book.bid.type} at {data?.order_book.bid.price} (Qty: {data?.order_book.bid.quantity})</p>
        <p><strong>Ask:</strong> {data?.order_book.ask.type} at {data?.order_book.ask.price} (Qty: {data?.order_book.ask.quantity})</p>
      </div>
    </div>
  );
}
