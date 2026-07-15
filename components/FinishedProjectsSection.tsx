export function FinishedProjectsSection() {
  const images = [
    { src: "public/images/cocina1.jpeg", alt: "Cocina terminada" },
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Proyectos Acabados</h2>
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