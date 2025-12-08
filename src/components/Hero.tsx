"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    badge: "Os melhores produtos em PVC",
    title: "Somos a fábrica com a maior variedade de eletrodutos do Brasil",
    description: "No mercado desde 1999, hoje a Masster Plásticos é a empresa com a maior variedade de eletrodutos em PVC do Brasil. Conheça nossos produtos!",
    buttons: [
      { href: "/produtos", text: "Saiba mais sobre a Masster", variant: "primary" as const },
      { href: "/catalogo", text: "Conheça nossos produtos", variant: "secondary" as const },
    ],
  },
  {
    badge: "Linha Cinza Claro",
    title: "Eletrodutos em PVC Cinza Claro de alta qualidade",
    description: "Nossa linha de eletrodutos em PVC Cinza Claro oferece excelente resistência e durabilidade, ideal para instalações elétricas que exigem qualidade e confiabilidade.",
    image: "/images/circuito-cinza-claro.webp",
    buttons: [
      { href: "/linha-cinza-claro", text: "Conheça a linha", variant: "primary" as const },
      { href: "/catalogo", text: "Baixar catálogo", variant: "secondary" as const },
    ],
  }
];

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
      
      <div className="container h-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex items-center justify-center text-white">
                <div className="max-w-[50%] mx-auto w-full">
                  {slide.image ? (
                    <div className="flex items-center gap-8 h-full">
                      <div className="flex-shrink-0 w-1/3 h-full flex items-center">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={600}
                          height={1200}
                          className="w-full h-full object-contain"
                          priority={index === 1}
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex justify-start">
                          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm">
                            <span>{slide.badge}</span>
                          </div>
                        </div>
                        <h1 className="mt-6 text-3xl md:text-6xl font-bold tracking-tight">
                          {slide.title}
                        </h1>
                        <p className="mt-4 text-white/80 max-w-2xl">
                          {slide.description}
                        </p>
                        <div className="mt-8 flex items-center gap-3 flex-wrap">
                          {slide.buttons.map((button, btnIndex) => (
                            <Button key={btnIndex} href={button.href} variant={button.variant}>
                              {button.text}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="flex justify-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm">
                          <span>{slide.badge}</span>
                        </div>
                      </div>
                      <h1 className="mt-6 text-3xl md:text-6xl font-bold tracking-tight">
                        {slide.title}
                      </h1>
                      <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                        {slide.description}
                      </p>
                      <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
                        {slide.buttons.map((button, btnIndex) => (
                          <Button key={btnIndex} href={button.href} variant={button.variant}>
                            {button.text}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

