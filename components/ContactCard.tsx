// components/ContactCard.tsx
type ContactCardProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
};

export function ContactCard({
  title,
  subtitle,
  buttonText,
  href,
}: ContactCardProps) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur p-6 shadow-sm ring-1 ring-white/15">
      <h3 className="text-2xl font-extrabold mb-2">{title}</h3>
      <p className="mb-5 opacity-90">{subtitle}</p>
      <a
        href={href}
        className="inline-flex items-center justify-center rounded-xl bg-white text-indigo-700 px-4 py-2 font-semibold hover:opacity-90 transition"
      >
        {buttonText}
      </a>
    </div>
  );
}
