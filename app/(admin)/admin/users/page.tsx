"use client";
import React, { useState } from "react";
import { SAMPLE_USERS } from "@/lib/mock-data";
import { Badge, CyberCard, DemoDataBanner } from "@/components/ui/primitives";

export default function AdminUsersPage() {
  const [users, setUsers] = useState(SAMPLE_USERS);
  const [search, setSearch] = useState("");
  const s = search.toLowerCase();
  const filtered = users.filter((u) => u.name.toLowerCase().includes(s) || u.email.toLowerCase().includes(s));

  const toggleStatus = (id: string) =>
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, status: u.status === "Active" ? "Suspended" : "Active" } : u)));

  return (
    <div className="space-y-6">
      <DemoDataBanner />
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="font-display text-2xl font-bold text-automa-text">Users Management</h1>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search users" placeholder="Search users..." className="rounded-lg border border-[rgba(0,255,136,0.2)] bg-automa-secondaryBg px-3.5 py-2 text-xs text-automa-text focus:border-automa-green focus:outline-none" />
      </div>
      <CyberCard className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-[rgba(0,255,136,0.15)] font-mono text-automa-green">
              <th className="py-3 pr-4">User</th><th className="py-3 px-4">Role</th><th className="py-3 px-4">Status</th><th className="py-3 px-4">Joined</th><th className="py-3 pl-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(0,255,136,0.1)]">
            {filtered.map((u) => (
              <tr key={u.id}>
                <td className="py-3.5 pr-4"><p className="font-semibold text-automa-text">{u.name}</p><p className="font-mono text-automa-muted">{u.email}</p></td>
                <td className="py-3.5 px-4 font-mono text-automa-muted">{u.role}</td>
                <td className="py-3.5 px-4"><Badge variant={u.status === "Active" ? "emerald" : u.status === "Suspended" ? "danger" : "amber"}>{u.status}</Badge></td>
                <td className="py-3.5 px-4 font-mono text-automa-muted">{u.joinedAt}</td>
                <td className="py-3.5 pl-4">
                  <button type="button" onClick={() => toggleStatus(u.id)} className="rounded border border-[rgba(0,255,136,0.25)] px-2.5 py-1 font-mono text-automa-green hover:bg-automa-darkGreen">Toggle Status</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CyberCard>
    </div>
  );
}
