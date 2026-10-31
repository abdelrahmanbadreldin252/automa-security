"use client";

import React from "react";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-automa-bg px-4 text-center text-automa-text">
      <h2 className="font-display text-2xl font-bold">Something went wrong</h2>
      <p className="mt-2 max-w-md text-sm text-automa-muted">
        The page could not be loaded. Please try again.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-lg bg-automa-green px-5 py-2.5 text-sm font-semibold text-automa-bg hover:bg-automa-secondaryGreen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-automa-green focus-visible:ring-offset-2 focus-visible:ring-offset-automa-bg"
      >
        Try again
      </button>
    </main>
  );
}
