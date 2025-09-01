import * as React from "react";
import clsx from "clsx";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const base =
  "inline-flex items-center justify-center rounded-full border transition active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2";
const variants: Record<Variant, string> = {
  primary: "bg-[hsl(var(--brand-600))] text-white border-[hsl(var(--brand-600))] hover:opacity-90",
  outline: "bg-white text-gray-900 border-gray-200 hover:bg-gray-50",
  ghost: "bg-transparent text-gray-700 border-transparent hover:bg-gray-50",
};
const sizes: Record<Size, string> = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-base md:text-lg px-5 py-2.5",
};

export function Button({ className, variant = "primary", size = "md", ...rest }: ButtonProps) {
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...rest} />;
}
