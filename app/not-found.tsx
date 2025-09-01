import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto" }}>
      <h1>404 · Page not found</h1>
      <p style={{ color: "#666" }}>The page you’re looking for doesn’t exist.</p>
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
    </main>
  );
}
