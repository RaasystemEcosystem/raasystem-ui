@@ src/components/MarketData.tsx @@
+import { Card, CardContent } from "@/components/ui/card";
+import { Bitcoin, DollarSign, TrendingDown, TrendingUp } from "lucide-react";
+import XDCIcon from "./XDCIcon";

+const pairs = [
+  { icon: <Bitcoin className="h-4 w-4" />, name: 'BTC/RAASK', price: '₿ 0.0000432', trend: 'up' },
+  { icon: <XDCIcon size={16} />, name: 'XDC/RAASK', price: 'Ͼ 0.0021', trend: 'up' },
+  { icon: <DollarSign className="h-4 w-4" />, name: 'RAASK/USD', price: '$ 2.98', trend: 'up' },
+  { icon: <Bitcoin className="h-4 w-4" />, name: 'BTC/RAAK', price: '₿ 0.0000650', trend: 'down' },
+  { icon: <XDCIcon size={16} />, name: 'XDC/RAAK', price: 'Ͼ 0.0035', trend: 'up' },
+  { icon: <DollarSign className="h-4 w-4" />, name: 'RAAK/USD', price: '$ 1.12', trend: 'down' },
+];

+export default function MarketData() {
+  return (
+    <section className="mb-6">
+      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">📊 Market Data</h2>
+      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
+        {pairs.map((pair, idx) => (
+          <Card
+            key={idx}
+            className="shadow-md rounded-2xl border border-muted bg-background hover:shadow-lg transition duration-200"
+          >
+            <CardContent className="flex items-center justify-between p-4">
+              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
+                <span>{pair.icon}</span>
+                <span className="font-medium">{pair.name}</span>
+              </div>
+              <div className="flex items-center gap-1 text-right">
+                <span className="font-semibold">{pair.price}</span>
+                {pair.trend === 'up' ? (
+                  <TrendingUp className="h-4 w-4 text-green-500" />
+                ) : (
+                  <TrendingDown className="h-4 w-4 text-red-500" />
+                )}
+              </div>
+            </CardContent>
+          </Card>
+        ))}
+      </div>
+    </section>
+  );
+}
