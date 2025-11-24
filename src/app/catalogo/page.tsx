"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function CatalogoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    cargo: "",
    interesse: "",
    aceite: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/catalogo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao processar solicitação");
      }

      setIsSubmitted(true);
      downloadPDF();
    } catch (err) {
      console.error("Erro ao solicitar catálogo:", err);
      alert(err instanceof Error ? err.message : "Erro ao processar solicitação. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadPDF = () => {
    // Simular download do PDF
    const link = document.createElement('a');
    link.href = '/catalogo-masster-plasticos.pdf'; // Substitua pelo caminho real do PDF
    link.download = 'Catalogo-Masster-Plasticos.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              Catálogo <span className="text-brand-yellow">Masster Plásticos</span>
            </h1>
            <p className="text-xl text-white leading-relaxed mb-8">
              Conheça nossa linha completa de produtos plásticos de alta qualidade. 
              Baixe nosso catálogo digital e descubra as melhores soluções para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-brand-yellow text-black px-6 py-3 rounded-lg font-medium">
                📄 Catálogo Digital Completo
              </div>
              <div className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-lg font-medium">
                🎯 Produtos Especializados
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Baixe Nosso Catálogo Gratuitamente
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Preencha o formulário abaixo e tenha acesso completo ao nosso catálogo digital 
              com todos os produtos, especificações técnicas e informações detalhadas.
            </p>
            
            {!isSubmitted ? (
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        required
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        required
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                        placeholder="(47) 99999-9999"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-2">
                        Cargo
                      </label>
                      <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                        placeholder="Seu cargo na empresa"
                      />
                    </div>
                    <div>
                      <label htmlFor="interesse" className="block text-sm font-medium text-gray-700 mb-2">
                        Área de Interesse
                      </label>
                      <select
                        id="interesse"
                        name="interesse"
                        value={formData.interesse}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                      >
                        <option value="">Selecione uma área</option>
                        <option value="masster-plus">Masster Plus</option>
                        <option value="eco">Eco</option>
                        <option value="decor">Decor</option>
                        <option value="classe-a">Classe A</option>
                        <option value="todos">Todas as linhas</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="aceite"
                      name="aceite"
                      required
                      checked={formData.aceite}
                      onChange={handleInputChange}
                      className="mt-1 mr-3 h-4 w-4 text-brand-yellow focus:ring-brand-yellow border-gray-300 rounded"
                    />
                    <label htmlFor="aceite" className="text-sm text-gray-600">
                      Concordo em receber informações sobre produtos e novidades da Masster Plásticos. 
                      Posso cancelar o recebimento a qualquer momento.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-brand-yellow text-black px-8 py-3 rounded-lg font-medium hover:bg-brand-yellow/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                        Processando...
                      </div>
                    ) : (
                      'Baixar Catálogo Gratuitamente'
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Obrigado pelo seu interesse!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Seu catálogo está pronto para download. Clique no botão abaixo para baixar.
                  </p>
                  <button
                    onClick={downloadPDF}
                    className="bg-brand-yellow text-black px-8 py-3 rounded-lg font-medium hover:bg-brand-yellow/90 transition-colors shadow-sm"
                  >
                    📄 Baixar Catálogo PDF
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefícios do Catálogo */}
      <section className="py-16 bg-brand-yellow">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">O que você encontrará no catálogo</h2>
            <p className="text-xl text-black/80">Informações completas sobre nossos produtos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Produtos Completos</h3>
              <p className="text-black/80">
                Todas as linhas de produtos com especificações técnicas detalhadas
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Especificações Técnicas</h3>
              <p className="text-black/80">
                Dados técnicos precisos para facilitar sua escolha e aplicação
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Aplicações Práticas</h3>
              <p className="text-black/80">
                Exemplos de uso e aplicações para cada tipo de produto
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Informações de Contato</h3>
              <p className="text-black/80">
                Dados para contato direto com nossa equipe comercial
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Novidades</h3>
              <p className="text-black/80">
                Últimos lançamentos e produtos inovadores da Masster Plásticos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Suporte Especializado</h3>
              <p className="text-black/80">
                Informações sobre suporte técnico e consultoria especializada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pronto para descobrir nossas soluções?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Baixe nosso catálogo e tenha acesso a todas as informações que você precisa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-brand-yellow text-black px-8 py-3 rounded-lg font-medium hover:bg-brand-yellow/90 transition-colors"
              >
                Baixar Catálogo Agora
              </button>
              <a 
                href="/contato" 
                className="bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
