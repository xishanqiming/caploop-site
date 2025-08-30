import clsx from "clsx";

export default function Card({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx(
        "border border-gray-100 bg-white rounded-2xl shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}