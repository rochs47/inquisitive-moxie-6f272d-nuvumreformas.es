import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  iconClassName?: string
  textClassName?: string
  variant?: "default" | "light"
}

export function Logo({ className, textClassName, variant = "default" }: LogoProps) {
  return (
    <div className={cn("flex items-center select-none", className)}>
      {/* Texto de marca NOVUM en mayúsculas, negrita y con relieve */}
      <span
        className={cn(
          "font-serif font-bold tracking-[0.15em] text-3xl uppercase",
          variant === "default" ? "text-neutral-900" : "text-neutral-50",
          textClassName
        )}
        style={{
          textShadow:
            variant === "default"
              ? "1px 1px 0 rgba(0,0,0,0.15), 2px 2px 2px rgba(0,0,0,0.25)"
              : "1px 1px 0 rgba(0,0,0,0.4), 2px 2px 3px rgba(0,0,0,0.5)",
        }}
      >
        NOVUM
      </span>
    </div>
  )
}
