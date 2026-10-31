"use client";
import React, { useState } from "react";
import { Check, Trash2 } from "lucide-react";
import { SAMPLE_NOTIFICATIONS } from "@/lib/mock-data";
import { Badge, CyberCard, DemoDataBanner } from "@/components/ui/primitives";

export default function NotificationsPage() {
  const [items, setItems] = useState(SAMPLE_NOTIFICATIONS);
  const markRead = (id: string) => setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  const remove = (id: string) => setItems((prev) => prev.filter((n) => n.id !== id));

  return (
    <div className="space-y-6">
      <DemoDataBanner />
      <h1 className="font-display text-2xl font-bold text-automa-text">Notifications</h1>
      <div className="space-y-4">
        {items.length === 0 && <p className="text-sm text-automa-muted">No notifications.</p>}
        {items.map((n) => (
          <CyberCard key={n.id} className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant={n.read ? "neutral" : "emerald"}>{n.read ? "Read" : "Unread"}</Badge>
                <span className="font-mono text-xs text-automa-muted">{n.timestamp}</span>
              </div>
              <h2 className="mt-2 font-display text-base font-bold text-automa-text">{n.title}</h2>
              <p className="mt-1 text-sm text-automa-muted">{n.message}</p>
            </div>
            <div className="flex items-center gap-2">
              {!n.read && (
                <button type="button" onClick={() => markRead(n.id)} className="rounded-lg border border-[rgba(0,255,136,0.25)] p-2 text-automa-green hover:bg-automa-darkGreen" aria-label="Mark as read">
                  <Check className="h-4 w-4" />
                </button>
              )}
              <button type="button" onClick={() => remove(n.id)} className="rounded-lg border border-red-500/30 p-2 text-red-400 hover:bg-red-950/40" aria-label="Delete notification">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </CyberCard>
        ))}
      </div>
    </div>
  );
}
