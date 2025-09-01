import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section container text-center space-y-4">
      <h1 className="text-2xl font-semibold">Page Not Found</h1>
      <p className="text-gray-600">This page doesn’t exist.</p>
      <Link href="/" className="btn">Back to Home</Link>
    </main>
  );
}
