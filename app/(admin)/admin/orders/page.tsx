import React from "react";
import { SAMPLE_ORDERS } from "@/lib/mock-data";
import { Badge, CyberCard, DemoDataBanner } from "@/components/ui/primitives";

export default function AdminOrdersPage() {
  return (
    <div className="space-y-6">
      <DemoDataBanner />
      <h1 className="font-display text-2xl font-bold text-automa-text">Orders Management</h1>
      <CyberCard className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-[rgba(0,255,136,0.15)] font-mono text-automa-green">
              <th className="py-3 pr-4">Order ID</th><th className="py-3 px-4">Customer</th><th className="py-3 px-4">Product</th><th className="py-3 px-4">Total</th><th className="py-3 pl-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(0,255,136,0.1)]">
            {SAMPLE_ORDERS.map((o) => (
              <tr key={o.id}>
                <td className="py-3.5 pr-4 font-mono text-automa-text">{o.id}</td>
                <td className="py-3.5 px-4"><p className="text-automa-text">{o.customerName}</p><p className="font-mono text-automa-muted">{o.customerEmail}</p></td>
                <td className="py-3.5 px-4 text-automa-text">{o.product}</td>
                <td className="py-3.5 px-4 font-mono text-automa-green">{o.price}</td>
                <td className="py-3.5 pl-4"><Badge variant={o.paymentStatus === "Paid" ? "emerald" : "amber"}>{o.paymentStatus}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </CyberCard>
    </div>
  );
}
