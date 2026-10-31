"use client";
import React, { useState } from "react";
import { SAMPLE_BLOG_POSTS } from "@/lib/mock-data";
import { Badge, CyberCard, DemoDataBanner } from "@/components/ui/primitives";

export default function AdminBlogPage() {
  const [posts, setPosts] = useState(SAMPLE_BLOG_POSTS);
  const togglePublish = (id: string) =>
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, published: !p.published } : p)));

  return (
    <div className="space-y-6">
      <DemoDataBanner />
      <h1 className="font-display text-2xl font-bold text-automa-text">Blog & Advisory CMS</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <CyberCard key={post.id} className="flex items-center justify-between gap-4">
            <div>
              <Badge variant={post.published ? "emerald" : "neutral"}>{post.published ? "Published" : "Draft"}</Badge>
              <h2 className="mt-2 font-display text-base font-bold text-automa-text">{post.title}</h2>
              <p className="font-mono text-xs text-automa-muted">/{post.slug} • {post.category}</p>
            </div>
            <button type="button" onClick={() => togglePublish(post.id)} className="shrink-0 rounded border border-[rgba(0,255,136,0.25)] px-3 py-1.5 font-mono text-xs text-automa-green hover:bg-automa-darkGreen">
              {post.published ? "Unpublish" : "Publish"}
            </button>
          </CyberCard>
        ))}
      </div>
    </div>
  );
}
