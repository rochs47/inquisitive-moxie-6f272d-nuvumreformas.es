export function BeforeAfterSection() {
  // Aquí es donde añades tus fotos. 
  // Asegúrate de que la ruta coincida exactamente con la carpeta que creaste en 'public'
  const images = [
    { src: "/images/tu-carpeta/foto1.jpg", alt: "Reforma salón" },
    { src: "/images/tu-carpeta/foto2.jpg", alt: "Reforma cocina" },
    // Añade aquí todas las que quieras
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Antes y Después</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img.src} 
            alt={img.alt} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
}
export function BeforeAfterSection() {
  // Aquí es donde añades tus fotos. 
  // Asegúrate de que la ruta coincida exactamente con la carpeta que creaste en 'public'
  const images = [
    { src: "/images/piso-badalona-julio-2026/cocina-1.jpeg", alt: "Reforma cocina" },
    { src: "/images/piso-badalona-julio-2026/cocina-2.jpeg", alt: "Reforma cocina" },
    // Añade aquí todas las que quieras
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Antes y Después</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img.src} 
            alt={img.alt} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
}