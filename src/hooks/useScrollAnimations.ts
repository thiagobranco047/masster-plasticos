"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar o plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollAnimations() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const categoriasRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLElement>(null);
  const experienciaRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Configurar scroll suave
    gsap.registerPlugin(ScrollTrigger);
    
    // Animação do Hero
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animação do Stats
    if (statsRef.current) {
      gsap.fromTo(statsRef.current.querySelectorAll('.stat-item'), 
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8, 
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animação do GridFeatures
    if (featuresRef.current) {
      gsap.fromTo(featuresRef.current.querySelectorAll('.feature-card'), 
        { opacity: 0, y: 50, rotation: 5 },
        { 
          opacity: 1, 
          y: 0, 
          rotation: 0,
          duration: 1, 
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animação do CategoriasDestaque
    if (categoriasRef.current) {
      gsap.fromTo(categoriasRef.current.querySelectorAll('.categoria-card'), 
        { opacity: 0, x: -50, scale: 0.95 },
        { 
          opacity: 1, 
          x: 0, 
          scale: 1,
          duration: 0.9, 
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: categoriasRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animação do BannerQualidade
    if (bannerRef.current) {
      gsap.fromTo(bannerRef.current, 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animação do Experiencia
    if (experienciaRef.current) {
      gsap.fromTo(experienciaRef.current.querySelectorAll('.experiencia-section'), 
        { opacity: 0, x: -80 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1.1, 
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: experienciaRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animação do Newsletter
    if (newsletterRef.current) {
      gsap.fromTo(newsletterRef.current, 
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: newsletterRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Configurar scroll suave global
    gsap.config({
      nullTargetWarn: false,
      trialWarn: false
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
