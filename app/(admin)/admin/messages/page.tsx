"use client";
import React, { useState } from "react";
import { SAMPLE_MESSAGES } from "@/lib/mock-data";
import { Badge, CyberCard, DemoDataBanner } from "@/components/ui/primitives";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState(SAMPLE_MESSAGES);
  const toggleReply = (id: string) =>
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: true, replied: !m.replied } : m)));

  return (
    <div className="space-y-6">
      <DemoDataBanner />
      <h1 className="font-display text-2xl font-bold text-automa-text">Customer Contact Messages</h1>
      <div className="space-y-4">
        {messages.map((m) => (
          <CyberCard key={m.id} className="space-y-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-base font-bold text-automa-text">{m.subject}</h2>
                <p className="font-mono text-xs text-automa-muted">From: {m.name} ({m.email}) • {m.receivedAt}</p>
              </div>
              <div className="flex items-center gap-2">
                {!m.read && <Badge variant="emerald">Unread</Badge>}
                <Badge variant={m.replied ? "emerald" : "amber"}>{m.replied ? "Replied" : "Awaiting Reply"}</Badge>
                <button type="button" onClick={() => toggleReply(m.id)} className="rounded border border-[rgba(0,255,136,0.25)] px-2.5 py-1 font-mono text-xs text-automa-green hover:bg-automa-darkGreen">
                  {m.replied ? "Mark Unreplied" : "Mark Replied"}
                </button>
              </div>
            </div>
            <p className="text-sm text-automa-muted">{m.message}</p>
          </CyberCard>
        ))}
      </div>
    </div>
  );
}
