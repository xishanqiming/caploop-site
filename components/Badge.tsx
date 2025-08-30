import { Check } from "lucide-react";
export function CheckBadge({ children }: React.PropsWithChildren) {
  return (
    <span className="badge">
      <Check className="size-3.5" /> {children}
    </span>
  );
}