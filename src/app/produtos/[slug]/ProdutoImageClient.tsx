"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ProdutoImageClientProps {
  src: string;
  alt: string;
  nome: string;
}

export default function ProdutoImageClient({ src, alt, nome }: ProdutoImageClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Imagem do Produto */}
      <div 
        className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group"
        onClick={openModal}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay com ícone de zoom */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg 
              className="w-12 h-12 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
              />
            </svg>
          </div>
        </div>
        {/* Outline ao redor da imagem */}
        <div className="absolute inset-0 border-2 border-brand-yellow/30 rounded-2xl group-hover:border-brand-yellow transition-colors duration-300"></div>
      </div>

      {/* Modal Fancybox */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            {/* Botão de fechar */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-brand-yellow transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Imagem ampliada */}
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className="object-contain max-w-full max-h-[80vh] rounded-lg"
                priority
              />
            </div>
            
            {/* Título do produto */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
              <h3 className="text-lg font-semibold">{nome}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
