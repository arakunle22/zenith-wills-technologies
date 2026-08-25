import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const variants = {
  accent:
    "bg-accent text-ink hover:bg-accent-soft shadow-[0_0_36px_-10px] shadow-accent/70",
  primary: "bg-primary text-frost hover:bg-primary-soft",
  outline:
    "border border-frost/20 text-frost hover:border-accent/70 hover:text-accent",
} as const;

const sizes = {
  md: "h-11 px-6 text-sm",
  lg: "h-[52px] px-8 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

export function ButtonLink({
  variant = "accent",
  size = "md",
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
