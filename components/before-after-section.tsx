export function BeforeAfterSection() {
  const images: { src: string; alt: string }[] = []; // Hemos definido el tipo aquí

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Antes y Después</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img key={index} src={img.src} alt={img.alt} />
        ))}
      </div>
    </section>
  );
}