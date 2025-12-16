import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCategorias } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Nossas Linhas",
  description: "Conheça nossas principais linhas de produtos: Masster Plus, Masster Decor, Masster Eco e Classe A.",
};

export default function CategoriasPage() {
  const categorias = getCategorias();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-40 pb-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/internas/bg-topo-internas.png)' }}
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossas <span className="text-brand-yellow">Linhas</span>
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Conheça nossas principais linhas de produtos plásticos, desenvolvidas 
              com tecnologia de ponta e materiais de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Categorias de Produtos */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossas Linhas de Produtos</h2>
            <p className="text-xl text-gray-600">Escolha uma linha para ver todos os produtos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categorias.map((categoria) => {
              const isDecor = categoria.slug === "masster-decor";
              const href = isDecor
                ? "/masster-decor"
                : `/produtos?linha=${encodeURIComponent(
                    categoria.slug === "masster-plus"
                      ? "Masster Plus"
                      : categoria.slug === "masster-eco"
                        ? "Masster Eco"
                        : categoria.slug === "classe-a"
                          ? "Classe A"
                          : categoria.nome
                  )}`;
              const imageSlug =
                categoria.slug === "masster-eco"
                  ? "eco"
                  : categoria.slug === "masster-plus"
                    ? "masster-plus"
                    : categoria.slug === "masster-decor"
                      ? "decor"
                      : categoria.slug;

              return (
                <Link
                  key={categoria.slug}
                  href={href}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                      src={`/images/categorias/${imageSlug}.png`}
                    alt={categoria.nome}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-yellow transition-colors">
                    {categoria.nome}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {categoria.descricao}
                  </p>
                  <div className="flex items-center text-brand-yellow font-medium text-sm">
                    Ver produtos
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Características dos Produtos */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Características dos Nossos Produtos</h2>
            <p className="text-xl text-gray-600">Qualidade e inovação em cada solução</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alta Durabilidade</h3>
              <p className="text-gray-600 leading-relaxed">
                Produtos desenvolvidos com materiais de alta resistência, garantindo 
                longa vida útil e excelente desempenho em diversas aplicações.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustentabilidade</h3>
              <p className="text-gray-600 leading-relaxed">
                Compromisso com o meio ambiente através de processos sustentáveis 
                e materiais recicláveis, contribuindo para um futuro mais verde.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inovação Tecnológica</h3>
              <p className="text-gray-600 leading-relaxed">
                Pesquisa e desenvolvimento contínuos resultam em produtos inovadores 
                que atendem às necessidades mais exigentes do mercado.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certificação de Qualidade</h3>
              <p className="text-gray-600 leading-relaxed">
                Todos os produtos passam por rigorosos controles de qualidade e 
                são certificados conforme as normas internacionais mais exigentes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalização</h3>
              <p className="text-gray-600 leading-relaxed">
                Desenvolvimento de soluções customizadas para atender necessidades 
                específicas de cada cliente e aplicação.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Suporte Técnico</h3>
              <p className="text-gray-600 leading-relaxed">
                Equipe especializada oferece suporte técnico completo, desde a 
                seleção do produto até a implementação da solução.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-yellow">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">
              Precisa de uma Solução Personalizada?
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Nossa equipe está pronta para desenvolver produtos sob medida para suas necessidades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato" 
                className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Solicitar Orçamento
              </Link>
              <Link 
                href="/catalogo" 
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Ver Catálogo Completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
