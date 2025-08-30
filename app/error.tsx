"use client";
export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  return (
    <html>
      <body className="section">
        <div className="container text-center">
          <h1 className="text-3xl font-semibold">出错了</h1>
          <p className="text-gray-600 mt-3">发生了意外错误，请稍后再试。</p>
          <pre className="mt-4 text-xs text-gray-400">{error?.message}</pre>
          <a className="btn btn-primary mt-6" href="/">返回首页</a>
        </div>
      </body>
    </html>
  );
}