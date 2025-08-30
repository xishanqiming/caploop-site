export default function NotFound() {
  return (
    <main className="section">
      <div className="container text-center">
        <h1 className="text-3xl font-semibold">页面不存在</h1>
        <p className="text-gray-600 mt-3">请检查链接或返回首页。</p>
        <a className="btn btn-primary mt-6" href="/">返回首页</a>
      </div>
    </main>
  );
}