import React from "react";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-automa-bg text-automa-text">
      <div className="flex items-center gap-3 font-mono text-sm text-automa-muted" role="status">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-automa-green border-r-transparent" />
        Loading AUTOMA SECURITY...
      </div>
    </main>
  );
}
