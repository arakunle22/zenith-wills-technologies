import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  onLight = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  onLight?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
            "text-accent",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight sm:text-4xl",
          onLight ? "text-ink" : "text-frost",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            onLight ? "text-ink/60" : "text-mist",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
