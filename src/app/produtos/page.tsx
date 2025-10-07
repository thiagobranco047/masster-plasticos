"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProdutos, getCategorias } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default function ProdutosPage() {
  const searchParams = useSearchParams();
  const categoriaFiltro = searchParams.get('categoria');
  
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categoriaFiltro || "");
  
  const produtos = getProdutos();
  const categorias = getCategorias();

  const produtosFiltrados = useMemo(() => {
    let filtrados = produtos;

    // Filtro por categoria
    if (categoriaSelecionada) {
      filtrados = filtrados.filter(produto => 
        produto.categoria.toLowerCase() === categoriaSelecionada.toLowerCase()
      );
    }

    // Filtro por busca
    if (busca) {
      filtrados = filtrados.filter(produto =>
        produto.nome.toLowerCase().includes(busca.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(busca.toLowerCase())
      );
    }

    return filtrados;
  }, [produtos, categoriaSelecionada, busca]);

  const limparFiltros = () => {
    setBusca("");
    setCategoriaSelecionada("");
  };

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
              Nossos <span className="text-brand-yellow">Produtos</span>
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Soluções plásticas inovadoras para diversos segmentos, desenvolvidas com 
              tecnologia de ponta e materiais de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Busca */}
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filtros por Linha */}
            <div className="w-full lg:w-1/3">
              <select
                value={categoriaSelecionada}
                onChange={(e) => setCategoriaSelecionada(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
              >
                <option value="">Todas as linhas</option>
                {categorias.map((categoria) => (
                  <option key={categoria.slug} value={categoria.nome}>
                    {categoria.nome}
                  </option>
                ))}
              </select>
            </div>

            {/* Limpar Filtros */}
            <div className="w-full lg:w-auto">
              <button
                onClick={limparFiltros}
                className="w-full lg:w-auto px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Limpar Filtros
              </button>
            </div>
          </div>

          {/* Resultados */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? 's' : ''} encontrado{produtosFiltrados.length !== 1 ? 's' : ''}
              {categoriaSelecionada && ` na linha ${categoriaSelecionada}`}
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="py-16">
        <div className="container">
          {produtosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {produtosFiltrados.map((produto) => (
                <Link
                  key={produto.slug}
                  href={`/produtos/${produto.slug}`}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:outline hover:outline-2 hover:outline-brand-yellow"
                >
                  <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={produto.imagem}
                      alt={produto.nome}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-yellow/90 text-black">
                        {produto.categoria}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-yellow transition-colors">
                      {produto.nome}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {produto.descricao}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-brand-yellow font-medium text-sm">
                        Ver detalhes
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="text-xs text-gray-500">
                        {produto.cores.length} cor{produto.cores.length !== 1 ? 'es' : ''}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.491M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhum produto encontrado</h3>
              <p className="text-gray-600 mb-6">
                Tente ajustar os filtros ou termo de busca para encontrar o que procura.
              </p>
              <button
                onClick={limparFiltros}
                className="bg-brand-yellow text-black px-6 py-3 rounded-lg font-medium hover:bg-brand-yellow/90 transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          )}
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
