import { cn } from "@/lib/utils";

/**
 * Signature motif: a 48px Signal-Blue rule with the ship-star glyph from the
 * Star Ship logo. Sits above each section eyebrow. Use consistently.
 */
export function HeadingRule({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex items-center gap-2", className)}
      aria-hidden="true"
    >
      <span className="h-0.5 w-12 rounded-full bg-signal" />
      <svg viewBox="0 0 24 24" className="size-3.5 text-signal" fill="currentColor">
        <path d="M12 0 L14.6 9.4 L24 12 L14.6 14.6 L12 24 L9.4 14.6 L0 12 L9.4 9.4 Z" />
      </svg>
    </span>
  );
}
