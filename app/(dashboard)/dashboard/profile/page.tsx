"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { CyberCard, DemoDataBanner } from "@/components/ui/primitives";

const input = "w-full rounded-lg border border-[rgba(0,255,136,0.2)] bg-automa-bg px-3.5 py-2.5 text-sm text-automa-text focus:border-automa-green focus:outline-none";
const label = "block text-xs font-mono uppercase text-automa-muted mb-1";

export default function MyProfilePage() {
  const [name, setName] = useState("Alex Mercer (Sample)");
  const [email, setEmail] = useState("alex.mercer@example.com");
  const [organization, setOrganization] = useState("Sample Organization");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile Updated");
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <DemoDataBanner />
      <h1 className="font-display text-2xl font-bold text-automa-text">My Profile</h1>
      <CyberCard>
        <form onSubmit={handleSave} className="space-y-4">
          <div><label htmlFor="name" className={label}>Full Name</label><input id="name" value={name} onChange={(e) => setName(e.target.value)} className={input} /></div>
          <div><label htmlFor="email" className={label}>Email Address</label><input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={input} /></div>
          <div><label htmlFor="org" className={label}>Organization</label><input id="org" value={organization} onChange={(e) => setOrganization(e.target.value)} className={input} /></div>
          <button type="submit" className="rounded-lg bg-automa-green px-5 py-2.5 text-sm font-semibold text-automa-bg hover:bg-automa-secondaryGreen">Save Profile Changes</button>
        </form>
      </CyberCard>
    </div>
  );
}
