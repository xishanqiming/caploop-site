"use client";
import Link from "next/link";

export default function GlobalError() {
  return (
    <html>
      <body className="min-h-screen grid place-items-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <Link href="/" className="btn">
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
