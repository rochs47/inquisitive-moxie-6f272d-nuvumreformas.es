import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center select-none", className)}>
      {/* Tu isotipo */}
      <img 
        src="/images/logo.svg" 
        alt="Isotipo Nuvum" 
        className="w-16 h-16 mb-2" 
      />
      
      {/* Nombre de la marca */}
      <span className="font-serif font-bold text-2xl tracking-widest text-neutral-900 uppercase">
        NOVUM
      </span>
    </div>
  )
}