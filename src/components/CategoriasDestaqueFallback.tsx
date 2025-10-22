"use client";

import Button from "@/components/Button";

export default function CategoriasDestaqueFallback() {
  const linhas = [
    {
      nome: "Masster Plus",
      descricao: "Linha premium com alta resistência e acabamento superior para instalações profissionais.",
      slug: "masster-plus"
    },
    {
      nome: "Masster Decor", 
      descricao: "Linha decorativa com visual moderno e sofisticado para ambientes aparentes.",
      slug: "masster-decor"
    },
    {
      nome: "Masster Eco",
      descricao: "Linha sustentável com PVC reciclado para instalações eco-friendly.",
      slug: "masster-eco"
    },
    {
      nome: "Classe A",
      descricao: "Linha premium Classe A com acabamento superior e alta qualidade para instalações profissionais.",
      slug: "classe-a"
    }
  ];

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
          
          {/* Grid de linhas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {linhas.map((linha, index) => (
              <div key={linha.slug} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-yellow">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{linha.nome}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{linha.descricao}</p>
                  <Button href={`/produtos?linha=${encodeURIComponent(linha.nome)}`}>
                    Ver produtos
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
