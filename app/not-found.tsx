import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto" }}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" prefetch>Return Home</Link>
    </main>
  );
}
