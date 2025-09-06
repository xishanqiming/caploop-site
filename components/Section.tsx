export default function Section({
  id,
  title,
  subtitle,
  center = false,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className={center ? "text-center max-w-3xl mx-auto" : ""}>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
