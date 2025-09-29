import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden h-screen">
      <div className="absolute inset-0 -z-10">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/videos/fachada.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="container h-full flex flex-col justify-center text-center text-white">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm">
            <span>Os melhores produtos em PVC</span>
          </div>
        </div>
        <h1 className="mt-6 text-3xl md:text-6xl font-bold tracking-tight">
          Somos a fábrica com a maior <br />variedade de eletrodutos do Brasil
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          No mercado desde 1999, hoje a Masster Plásticos é a empresa com a maior variedade de eletrodutos em PVC do Brasil. Conheça nossos produtos!
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 border-radius-full">
          <Button href="/produtos">Saiba mais sobre a Masster</Button>
          <Button variant="secondary" href="/catalogo">Conheça nossos produtos</Button>
        </div>
      </div>
    </section>
  );
}

