import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparklines, SparklinesLine } from "react-sparklines";

interface TokenCardProps {
  name: string;
  symbol: string;
  balance: number;
  goldEquivalent: number;
  priceHistory: number[];
  animationDelay: number;
}

export default function TokenCard({
  name,
  symbol,
  balance,
  goldEquivalent,
  priceHistory,
  animationDelay,
}: TokenCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay }}
    >
      <Card className="rounded-2xl shadow-lg p-4">
        <CardContent>
          <h2 className="text-xl font-bold mb-2">
            {name} ({symbol})
          </h2>
          <p className="text-2xl font-mono">
            {balance} {symbol}
          </p>
          <motion.p
            key={goldEquivalent}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            ≈ ${(goldEquivalent).toFixed(2)} USD (0.001g gold unit)
          </motion.p>
          <Sparklines data={priceHistory} width={100} height={20}>
            <SparklinesLine color="#f59e0b" />
          </Sparklines>
        </CardContent>
      </Card>
    </motion.div>
  );
}
