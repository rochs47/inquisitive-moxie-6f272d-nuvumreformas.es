import Image from "next/image"

export function Logo({ 
  className, 
  variant = "full" // "full" muestra isotipo + nombre, "icon" solo isotipo
}: { 
  className?: string, 
  variant?: "full" | "icon" 
}) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {/* El Isotipo */}
      <Image 
        src="/images/logo istopo 23 svg.svg" 
        alt="Novum Logo" 
        width={40} 
        height={40} 
        className="w-full h-auto"
      />
      
      {/* El nombre NOVUM (solo aparece si variant es 'full') */}
      {variant === "full" && (
        <span className="font-serif text-lg tracking-widest uppercase">
          NOVUM
        </span>
      )}
    </div>
  )
}