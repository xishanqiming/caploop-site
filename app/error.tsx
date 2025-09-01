"use client";
import Link from "next/link";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  console.error(error);
  return (
    <html>
      <body style={{ padding: 24, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto" }}>
        <h1>Something went wrong</h1>
        <p style={{ color: "#666" }}>We hit an unexpected error. Please try again.</p>
        <div style={{ marginTop: 16 }}>
          <Link href="/" style={{
            display: "inline-flex",
            padding: "8px 12px",
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            textDecoration: "none"
          }}>
            ← Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
