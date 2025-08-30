"use client";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
  asChild?: boolean;
  href?: string;
};
export function Button({ className, variant="primary", asChild, href, ...rest }: Props){
  const cn = clsx(
    "btn",
    variant==="primary" && "btn-primary",
    variant==="ghost"   && "btn-ghost",
    variant==="outline" && "btn-outline",
    className
  );
  if (asChild && href) {
    return <a className={cn} href={href} {...(rest as any)} />;
  }
  return <button className={cn} {...rest} />;
}