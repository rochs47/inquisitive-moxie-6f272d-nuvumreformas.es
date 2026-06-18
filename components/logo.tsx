import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center select-none", className)}>
      <img 
        src="/images/logo.svg" 
        alt="Nuvum Logo" 
        className="w-40 h-40 object-contain mix-blend-multiply" 
      />
      <span 
        className="font-bold text-5xl tracking-widest text-neutral-900 uppercase mt-4" 
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        NOVUM
      </span>
    </div>
  )
}