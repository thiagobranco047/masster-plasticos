"use client";

import { getCategorias } from "@/lib/data";
import Button from "@/components/Button";
import { useState } from "react";

export default function CategoriasDestaque() {
  const categorias = getCategorias();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/images/home/destaque.png";
  };
  return (
    <section className="w-full section bg-white">
      <div className="container">
        <div className="space-y-10">
          {/* Textos em largura total */}
          <div>
            <span className="text-sm font-medium text-brand-yellow">Linha de produtos</span>
            <div className="mt-2 mb-30 flex items-center justify-between gap-8">
              <h2 className="section-title">
                Produtos modernos,<br />práticos e funcionais
              </h2>
              <p className="text-sm text-[#475467] max-w-sm">
                Conheça nossas linhas exclusivas de eletrodutos e acessórios em PVC. Produtos que aliam qualidade, praticidade e design funcional para os mais diversos tipos de obra.
              </p>
            </div>
          </div>
          
          {/* Seletor e imagem lado a lado */}
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <ol className="space-y-4">
                {categorias.map((c, i) => (
                  <li 
                    key={c.slug} 
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out border-2 ${
                      categoriaSelecionada === i 
                        ? 'border-brand-yellow/20' 
                        : 'hover:bg-gray-50 border-transparent'
                    }`}
                    onClick={() => setCategoriaSelecionada(i)}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`text-3xl font-extrabold transition-colors duration-300 ${
                        categoriaSelecionada === i ? 'text-brand-yellow' : 'text-gray-400'
                      }`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-col min-h-[60px] justify-center">
                        <span className="text-sm text-zinc-700">Linha</span>
                        <strong className={`text-lg transition-colors duration-300 ${
                          categoriaSelecionada === i ? 'text-brand-yellow' : 'text-black'
                        }`}>
                          {c.nome}
                        </strong>
                        <p className="text-xs text-zinc-600 mt-1 leading-relaxed line-clamp-2">
                          {c.descricao}
                        </p>
                      </div>
                    </div>
                    <div className={`h-px mt-4 w-full transition-colors duration-300 ${
                      categoriaSelecionada === i ? 'bg-brand-yellow/30' : 'bg-zinc-200'
                    }`} />
                  </li>
                ))}
              </ol>
            </div>
            
            <div className="relative h-[500px] bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={`/images/categorias/${categorias[categoriaSelecionada].slug}.png`} 
                alt={categorias[categoriaSelecionada].nome} 
                className="h-full w-full object-contain transition-all duration-500 ease-in-out"
                onError={handleImageError}
              />
              <div className="absolute bottom-4 right-4">
                <Button href={`/produtos/${categorias[categoriaSelecionada].slug}`}>
                  Ver produtos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

