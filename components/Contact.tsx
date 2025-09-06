export default function Contact() {
  const blocks = [
    { title: "投资人", subtitle: "成为LP合伙人", button: "预约深度交流" },
    { title: "创业者", subtitle: "申请投资支持", button: "提交项目" },
    { title: "合作伙伴", subtitle: "生态合作机会", button: "商务合作" },
  ];
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-r from-indigo-700 to-violet-700 text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-6">
        {blocks.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl bg-white/10 backdrop-blur p-6"
          >
            <h3 className="text-2xl font-extrabold mb-2">{b.title}</h3>
            <p className="mb-4 opacity-90">{b.subtitle}</p>
            <button className="rounded-xl bg-white text-indigo-700 px-4 py-2 font-semibold hover:opacity-90">
              {b.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
