"use client";
import { useEffect, useRef } from 'react';

export function useScrollAnimations() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const categoriasRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLElement>(null);
  const experienciaRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Por enquanto, não usar GSAP para evitar erros de build
    // As animações podem ser implementadas posteriormente com CSS ou Framer Motion
    
    // Adicionar listener de erro global para capturar erros de extensões
    const handleError = (event: ErrorEvent) => {
      // Ignorar erros de extensões do navegador
      if (event.message?.includes('message channel closed') || 
          event.message?.includes('listener indicated an asynchronous response')) {
        event.preventDefault();
        return false;
      }
    };

    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return {
    heroRef,
    statsRef,
    featuresRef,
    categoriasRef,
    bannerRef,
    experienciaRef,
    newsletterRef
  };
}
