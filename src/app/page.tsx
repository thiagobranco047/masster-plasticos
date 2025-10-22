"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GridFeatures from "@/components/GridFeatures";
import BannerQualidade from "@/components/BannerQualidade";
import Newsletter from "@/components/Newsletter";
import Stats from "@/components/Stats";
import CategoriasDestaque from "@/components/CategoriasDestaque";
import Experiencia from "@/components/Experiencia";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {
  const {
    heroRef,
    statsRef,
    featuresRef,
    categoriasRef,
    experienciaRef
  } = useScrollAnimations();

  return (
    <ErrorBoundary>
      <Header />
      <section ref={heroRef}>
        <Hero />
      </section>
      <section ref={statsRef}>
        <Stats />
      </section>
      <section ref={featuresRef}>
        <GridFeatures />
      </section>
      <section ref={categoriasRef}>
        <CategoriasDestaque />
      </section>
      <section>
        <BannerQualidade />
      </section>
      <section ref={experienciaRef}>
        <Experiencia />
      </section>
      <section>
        <Newsletter />
      </section>
      <Footer />
    </ErrorBoundary>
  );
}
