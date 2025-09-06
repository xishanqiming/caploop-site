import * as React from "react";
import clsx from "clsx";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: false;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variantMap: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-[hsl(var(--brand-600))] text-white hover:brightness-95",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  ghost: "bg-transparent hover:bg-gray-100",
};

const sizeMap: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3 py-1.5 text-sm rounded-xl",
  md: "px-4 py-2 text-sm rounded-xl",
  lg: "px-5 py-2.5 text-base rounded-2xl",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center border border-transparent font-medium transition active:scale-[0.98]",
          variantMap[variant],
          sizeMap[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export default Button;
