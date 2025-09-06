import Link from "next/link";

export default function Privacy() {
  return (
    <main className="section">
      <div className="container prose max-w-3xl">
        <div className="not-prose mb-6">
          <Link
            href="/#hero"
            className="inline-flex items-center rounded-xl px-3 py-1.5 text-sm border border-gray-200 hover:bg-gray-50"
          >
            ← 返回首页
          </Link>
        </div>
        <h1>隐私政策（占位）</h1>
        <p>
          此页面为占位内容。正式版本将补充数据收集、用途、第三方共享、存储与删除机制等条款。
        </p>
      </div>
    </main>
  );
}
