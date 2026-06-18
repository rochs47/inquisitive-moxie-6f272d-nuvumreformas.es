import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center select-none", className)}>
      {/* Isotipo: quitamos el fondo forzando transparencia en el CSS */}
      <img 
        src="/images/logo.svg" 
        alt="Nuvum Logo" 
        className="w-32 h-32 object-contain" 
      />
      
      {/* Nombre: usamos Montserrat como pediste */}
      <span className="font-sans font-bold text-5xl tracking-widest text-neutral-900 uppercase mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        NOVUM
      </span>
    </div>
  )
}