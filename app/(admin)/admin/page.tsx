"use client";
import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { SAMPLE_ANALYTICS_SERIES, SAMPLE_DOWNLOADS, SAMPLE_ORDERS, SAMPLE_PRODUCTS, SAMPLE_USERS } from "@/lib/mock-data";
import { CyberCard, DemoDataBanner } from "@/components/ui/primitives";

export default function AdminOverviewPage() {
  const stats = [
    { label: "TOTAL USERS (SAMPLE)", value: SAMPLE_USERS.length, accent: true },
    { label: "ACTIVE PRODUCTS", value: SAMPLE_PRODUCTS.length },
    { label: "TOTAL ORDERS (SAMPLE)", value: SAMPLE_ORDERS.length },
    { label: "EXE DOWNLOAD LOGS", value: SAMPLE_DOWNLOADS.length, accent: true },
  ];
  return (
    <div className="space-y-8">
      <DemoDataBanner label="Admin Sample Data" />
      <h1 className="font-display text-2xl font-bold text-automa-text">Admin Command Overview</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <CyberCard key={s.label}>
            <p className="font-mono text-xs text-automa-muted">{s.label}</p>
            <p className={`mt-2 font-mono text-3xl font-bold ${s.accent ? "text-automa-green" : "text-automa-text"}`}>{s.value}</p>
          </CyberCard>
        ))}
      </div>
      <CyberCard className="h-80">
        <h2 className="font-mono text-xs uppercase text-automa-green mb-4">[Sample Chart] Monthly .EXE Downloads</h2>
        <ResponsiveContainer width="100%" height="85%">
          <AreaChart data={SAMPLE_ANALYTICS_SERIES}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,255,136,0.1)" />
            <XAxis dataKey="month" stroke="#9BAAA1" fontSize={11} />
            <YAxis stroke="#9BAAA1" fontSize={11} />
            <Tooltip contentStyle={{ backgroundColor: "#0D1510", borderColor: "rgba(0,255,136,0.3)", color: "#F5FFF8" }} />
            <Area type="monotone" dataKey="downloads" stroke="#00FF88" fill="rgba(0, 255, 136, 0.2)" />
          </AreaChart>
        </ResponsiveContainer>
      </CyberCard>
    </div>
  );
}
