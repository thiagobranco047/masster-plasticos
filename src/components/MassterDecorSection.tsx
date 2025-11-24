"use client";

import Image from "next/image";
import Button from "@/components/Button";

const circuitImages = [
  { src: "/images/masster-decor/circuito-amarelo.webp", alt: "Linha Masster Decor - amarelo" },
  { src: "/images/masster-decor/circuito-azul.webp", alt: "Linha Masster Decor - azul" },
  { src: "/images/masster-decor/circuito-bege-creme.webp", alt: "Linha Masster Decor - bege creme" },
  { src: "/images/masster-decor/circuito-ceramica.webp", alt: "Linha Masster Decor - cerâmica" },
  { src: "/images/masster-decor/circuito-cinza-munsell.webp", alt: "Linha Masster Decor - cinza munsell" },
  { src: "/images/masster-decor/circuito-cinza-normal.webp", alt: "Linha Masster Decor - cinza normal" },
  { src: "/images/masster-decor/circuito-rosa-bebe.webp", alt: "Linha Masster Decor - rosa bebê" },
  { src: "/images/masster-decor/circuito-rosa-pink.webp", alt: "Linha Masster Decor - rosa pink" },
  { src: "/images/masster-decor/circuito-verde.webp", alt: "Linha Masster Decor - verde" },
];

const marqueeImages = [...circuitImages, ...circuitImages];

export default function MassterDecorSection() {
  return (
    <>
      <section className="w-full bg-white pt-0 pb-20 md:pb-28">
        <div className="container">
          <div className="space-y-16 md:space-y-20">
            <div className="text-center">
              <small className="text-sm font-medium text-brand-yellow inline-block mb-4">
                Uma infinidade de possibilidades
              </small>
              <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-6">
                Conheça a linha <span className="text-brand-yellow">Masster Decor</span>
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed max-w-4xl mx-auto mb-8">
                A linha Masster Decor foi pensada para quem busca originalidade e identidade visual nos projetos.
                Eletrodutos, conexões e tampas com pigmentação exclusiva permitem aplicações criativas, funcionais e
                cheias de personalidade.
              </p>
              <Button href="/masster-decor" className="mx-auto">
                Conheça a linha completa
              </Button>
            </div>
          </div>
        </div>

        <div className="w-screen left-1/2 -translate-x-1/2 relative px-4 sm:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-white">
            <div className="marquee-track flex items-center h-full">
              {marqueeImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="relative flex-shrink-0 w-[260px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[360px] flex items-center justify-center"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 30vw, 20vw"
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          animation: marquee 24s linear infinite;
          width: max-content;
        }
      `}</style>
    </>
  );
}

