"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body style={{ padding: 24, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto" }}>
        <h2>Something went wrong.</h2>
        <pre style={{ whiteSpace: "pre-wrap", color: "#666" }}>{error?.message}</pre>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => reset()}>Try again</button>
          <Link href="/" prefetch>
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
