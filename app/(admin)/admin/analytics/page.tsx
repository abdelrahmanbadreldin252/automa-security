"use client";
import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { SAMPLE_ANALYTICS_SERIES } from "@/lib/mock-data";
import { CyberCard, DemoDataBanner } from "@/components/ui/primitives";

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <DemoDataBanner />
      <h1 className="font-display text-2xl font-bold text-automa-text">Platform Reports & Analytics</h1>
      <CyberCard className="h-96">
        <h2 className="font-mono text-xs uppercase text-automa-green mb-4">[Sample Dataset] Active Users vs. Orders</h2>
        <ResponsiveContainer width="100%" height="88%">
          <BarChart data={SAMPLE_ANALYTICS_SERIES}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,255,136,0.1)" />
            <XAxis dataKey="month" stroke="#9BAAA1" fontSize={11} />
            <YAxis stroke="#9BAAA1" fontSize={11} />
            <Tooltip contentStyle={{ backgroundColor: "#0D1510", borderColor: "rgba(0,255,136,0.3)", color: "#F5FFF8" }} />
            <Bar dataKey="activeUsers" fill="#00FF88" radius={[4, 4, 0, 0]} />
            <Bar dataKey="orders" fill="#00CC66" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CyberCard>
    </div>
  );
}
