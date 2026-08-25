import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  alt = "Zenith Wills Technologies logo",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={894}
      height={706}
      priority
      className={cn("w-auto", className)}
    />
  );
}

export function Wordmark({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-display text-lg font-bold tracking-tight",
          onDark ? "text-frost" : "text-ink",
        )}
      >
        ZENITH WILLS
      </span>
      <span
        className={cn(
          "mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em]",
          onDark ? "text-accent" : "text-accent-deep",
        )}
      >
        Technologies
      </span>
    </span>
  );
}

export function Brand({
  className,
  onDark = false,
  markClassName = "h-9",
}: {
  className?: string;
  onDark?: boolean;
  markClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className={markClassName} />
      <Wordmark onDark={onDark} />
    </div>
  );
}
