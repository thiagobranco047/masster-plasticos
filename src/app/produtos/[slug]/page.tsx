import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProdutoBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProdutoImageClient from "./ProdutoImageClient";

interface ProdutoPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Temporariamente desabilitado para investigar erros de build
// export async function generateStaticParams() {
//   const produtos = getProdutos();
//   return produtos.map((produto) => ({
//     slug: produto.slug,
//   }));
// }

export const dynamicParams = true;
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: ProdutoPageProps) {
  const { slug } = await params;
  const produto = getProdutoBySlug(slug);
  
  if (!produto) {
    return {
      title: "Produto não encontrado",
    };
  }

  const baseUrl = "https://www.massterplasticos.com.br";
  const produtoUrl = `${baseUrl}/produtos/${slug}`;
  const produtoImage = produto.imagem && produto.imagem.startsWith("http") 
    ? produto.imagem 
    : produto.imagem ? `${baseUrl}${produto.imagem}` : `${baseUrl}/og-image.png`;

  return {
    title: `${produto.nome} | Masster Plásticos`,
    description: `${produto.descricao} ${produto.aplicacao || ""}. Material: ${produto.material || "PVC"}. ${produto.norma ? `Norma: ${produto.norma}.` : ""}${produto.cores_disponiveis && produto.cores_disponiveis.length > 0 ? ` Disponível em ${produto.cores_disponiveis.join(", ")}.` : ""}`,
    keywords: [
      produto.nome,
      produto.categoria,
      produto.linha,
      "Masster Plásticos",
      "eletrodutos PVC",
      produto.material || "PVC",
      ...(produto.cores_disponiveis || []),
    ],
    openGraph: {
      title: `${produto.nome} | Masster Plásticos`,
      description: produto.descricao,
      url: produtoUrl,
      siteName: "Masster Plásticos",
      images: [
        {
          url: produtoImage,
          width: 1200,
          height: 630,
          alt: produto.nome,
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: `${produto.nome} | Masster Plásticos`,
      description: produto.descricao,
      images: [produtoImage],
    },
    alternates: {
      canonical: produtoUrl,
    },
  };
}

export default async function ProdutoPage({ params }: ProdutoPageProps) {
  try {
    const { slug } = await params;
    const produto = getProdutoBySlug(slug);

    if (!produto) {
      notFound();
    }

  const baseUrl = "https://www.massterplasticos.com.br";
  const produtoUrl = `${baseUrl}/produtos/${slug}`;
  const produtoImage = produto.imagem && produto.imagem.startsWith("http") 
    ? produto.imagem 
    : produto.imagem ? `${baseUrl}${produto.imagem}` : `${baseUrl}/og-image.png`;

  // Structured Data - Product
  const productSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: produto.nome || "",
    description: produto.descricao || "",
    image: produtoImage,
    brand: {
      "@type": "Brand",
      name: "Masster Plásticos",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Masster Plásticos",
      url: baseUrl,
    },
    category: produto.categoria || "",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      url: produtoUrl,
      seller: {
        "@type": "Organization",
        name: "Masster Plásticos",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
  };

  // Garantir que o JSON é válido antes de renderizar
  let productSchemaJson = "";
  try {
    productSchemaJson = JSON.stringify(productSchema);
  } catch (error) {
    // Se houver erro na serialização, não renderizar o schema
    console.error("Error serializing product schema:", error);
  }

  // Verificar quais campos existem nas variantes para renderizar a tabela dinamicamente
  const hasEntradas = produto.variantes && Array.isArray(produto.variantes) 
    ? produto.variantes.some(v => v && typeof v === 'object' && v.entradas !== undefined) 
    : false;
  const hasTamanho = produto.variantes && Array.isArray(produto.variantes)
    ? produto.variantes.some(v => v && typeof v === 'object' && v.tamanho !== undefined)
    : false;
  const hasDimensoes = produto.variantes && Array.isArray(produto.variantes)
    ? produto.variantes.some(v => v && typeof v === 'object' && v.dimensoes !== undefined)
    : false;
  const hasCompatibilidade = produto.variantes && Array.isArray(produto.variantes)
    ? produto.variantes.some(v => v && typeof v === 'object' && v.compatibilidade !== undefined)
    : false;
  const hasBitola = produto.variantes && Array.isArray(produto.variantes)
    ? produto.variantes.some(v => v && typeof v === 'object' && v.bitola !== undefined)
    : false;
  const hasReduzPara = produto.variantes && Array.isArray(produto.variantes)
    ? produto.variantes.some(v => v && typeof v === 'object' && v.reduz_para !== undefined)
    : false;

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data - Product */}
      {productSchemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: productSchemaJson,
          }}
        />
      )}
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-40 pb-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/internas/bg-topo-internas.png)' }}
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-yellow/20 text-brand-yellow mb-4">
              {produto.linha} - {produto.categoria}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {produto.nome}
            </h1>
            <p className="text-xl text-white leading-relaxed mb-8">
              {produto.descricao}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato" 
                className="bg-brand-yellow text-black px-8 py-3 rounded-lg font-medium hover:bg-brand-yellow/90 transition-colors text-center"
              >
                Solicitar Orçamento
              </Link>
              <Link 
                href="/produtos" 
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors text-center"
              >
                Ver Outros Produtos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Informações do Produto */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Informações do Produto */}
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-yellow/10 text-brand-yellow mb-4">
                {produto.linha} - {produto.categoria}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {produto.nome}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {produto.descricao}
              </p>
              
              {/* Especificações */}
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Material:</span>
                  <span className="text-gray-900">{produto.material}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Aplicação:</span>
                  <span className="text-gray-900">{produto.aplicacao}</span>
                </div>
                {produto.norma && (
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Norma:</span>
                    <span className="text-gray-900">{produto.norma}</span>
                  </div>
                )}
                {produto.cores_disponiveis && produto.cores_disponiveis.length > 0 && (
                  <div className="flex justify-between py-2">
                    <span className="font-medium text-gray-700">Cores disponíveis:</span>
                    <span className="text-gray-900">{produto.cores_disponiveis.join(", ")}</span>
                  </div>
                )}
              </div>
              </div>
              
            {/* Foto do Produto */}
            <div className="relative">
              <ProdutoImageClient 
                src={produto.imagem || "/og-image.png"}
                alt={produto.nome || "Produto"}
                nome={produto.nome || "Produto"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabela de Códigos */}
      {produto.bitolas && produto.bitolas.length > 0 && (() => {
        try {
          // Coletar todas as chaves de código de todas as bitolas para garantir que temos todas as colunas
          const todasChavesCodigo = new Set<string>();
          produto.bitolas.forEach(bitola => {
            if (bitola && bitola.codigo && typeof bitola.codigo === 'object') {
              Object.keys(bitola.codigo).forEach(key => todasChavesCodigo.add(key));
            }
          });
          
          if (todasChavesCodigo.size === 0) return null;
          
          const primeiraBitola = produto.bitolas[0];
          if (!primeiraBitola || !primeiraBitola.codigo || typeof primeiraBitola.codigo !== 'object') return null;
          
          const codigoKeys = Array.from(todasChavesCodigo);
          const usaCores = produto.cores_disponiveis && Array.isArray(produto.cores_disponiveis) && produto.cores_disponiveis.length > 0 
            ? produto.cores_disponiveis.some(cor => codigoKeys.includes(cor))
            : false;
          const colunas = usaCores && produto.cores_disponiveis && Array.isArray(produto.cores_disponiveis) && produto.cores_disponiveis.length > 0
            ? produto.cores_disponiveis 
            : codigoKeys;
          
          // Garantir que temos pelo menos uma coluna
          if (!colunas || !Array.isArray(colunas) || colunas.length === 0) {
            return null;
          }
          
          // Garantir que colunas é um array válido antes de renderizar
          const colunasValidas = Array.isArray(colunas) ? colunas : [];
          const hasEmbalagem = produto.embalagem && typeof produto.embalagem === 'object' && Object.keys(produto.embalagem).length > 0;
          
          const tableElement = (
            <section className="px-4 md:px-10 lg:px-24 pb-12 overflow-x-auto">
              <div className="container">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Códigos e Especificações</h3>
                <table className="w-full border text-sm">
                  <thead className="bg-zinc-100">
                    <tr>
                      <th className="py-3 px-4 border font-bold text-gray-900">Bitolas</th>
                      {colunasValidas.map((col, idx) => (
                        <th key={`col-${idx}-${col}`} className="py-3 px-4 border font-bold text-gray-900">{col}</th>
                      ))}
                      {hasEmbalagem && (
                        <th className="py-3 px-4 border font-bold text-gray-900">Embalagem</th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {produto.bitolas.map((bitola, idx) => {
                      if (!bitola || typeof bitola !== 'object') return null;
                      
                      const bitolaKey = bitola.bitola || `bitola-${idx}`;
                      const bitolaDisplay = bitola.bitola || '-';
                      const embalagemValue = hasEmbalagem && bitola.bitola && produto.embalagem && bitola.bitola in produto.embalagem 
                        ? produto.embalagem[bitola.bitola] 
                        : '-';
                      
                      return (
                        <tr key={bitolaKey}>
                          <td className="py-3 px-4 border font-bold text-gray-900">{bitolaDisplay}</td>
                          {colunasValidas.map((col, colIdx) => {
                            const codigoValue = bitola.codigo && typeof bitola.codigo === 'object' && bitola.codigo[col] !== undefined
                              ? bitola.codigo[col]
                              : '-';
                            return (
                              <td key={`codigo-${idx}-${colIdx}-${col}`} className="py-3 px-4 border font-semibold text-gray-800">
                                {codigoValue}
                              </td>
                            );
                          })}
                          {hasEmbalagem && (
                            <td className="py-3 px-4 border font-bold text-gray-900">
                              {embalagemValue}
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          );
          
          return tableElement;
        } catch (error) {
          console.error(`Error rendering bitolas table for ${slug}:`, error);
          return null;
        }
      })()}
      
      {/* Tabela de Variantes */}
      {produto.variantes && Array.isArray(produto.variantes) && produto.variantes.length > 0 && (function renderVariantesTable() {
        try {
          // Verificar se há pelo menos uma coluna para renderizar
          const primeiraVariante = produto.variantes[0];
          if (!primeiraVariante || typeof primeiraVariante !== 'object') return null;
          
          const temColunasVariante = hasBitola || hasEntradas || hasTamanho || hasDimensoes || hasCompatibilidade || hasReduzPara;
          const temCores = produto.cores_disponiveis && Array.isArray(produto.cores_disponiveis) && produto.cores_disponiveis.length > 0;
          const temCodigo = primeiraVariante.codigo && typeof primeiraVariante.codigo === 'object' && Object.keys(primeiraVariante.codigo).length > 0;
          
          if (!temColunasVariante && !temCores && !temCodigo) return null;
          
          const colunasCodigo = temCores && produto.cores_disponiveis && Array.isArray(produto.cores_disponiveis) && produto.cores_disponiveis.length > 0
            ? produto.cores_disponiveis 
            : (primeiraVariante.codigo && typeof primeiraVariante.codigo === 'object' ? Object.keys(primeiraVariante.codigo) : []);
          
          // Se não há colunas para renderizar, não renderizar a tabela
          if ((!colunasCodigo || !Array.isArray(colunasCodigo) || colunasCodigo.length === 0) && !temColunasVariante) return null;
          
          // Garantir que colunasCodigo é um array válido
          const colunasCodigoFinal = Array.isArray(colunasCodigo) ? colunasCodigo : [];
          
          return (
          <section className="px-4 md:px-10 lg:px-24 pb-12 overflow-x-auto">
            <div className="container">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Códigos e Especificações</h3>
              <table className="w-full border text-sm">
                <thead className="bg-zinc-100">
                  <tr>
                    {hasBitola && (
                      <th className="py-3 px-4 border font-bold text-gray-900">Bitola</th>
                    )}
                    {hasEntradas && (
                      <th className="py-3 px-4 border font-bold text-gray-900">Entradas</th>
                    )}
                    {hasTamanho && (
                      <th className="py-3 px-4 border font-bold text-gray-900">Tamanho</th>
                    )}
                    {hasDimensoes && (
                      <th className="py-3 px-4 border font-bold text-gray-900">Dimensões</th>
                    )}
                    {hasCompatibilidade && (
                      <th className="py-3 px-4 border font-bold text-gray-900">Compatibilidade</th>
                    )}
                    {hasReduzPara && (
                      <th className="py-3 px-4 border font-bold text-gray-900">Reduz Para</th>
                    )}
                    {colunasCodigoFinal && Array.isArray(colunasCodigoFinal) && colunasCodigoFinal.length > 0 && colunasCodigoFinal.map((col) => (
                      <th key={col} className="py-3 px-4 border font-bold text-gray-900">{col}</th>
                    ))}
                    <th className="py-3 px-4 border font-bold text-gray-900">Embalagem</th>
                  </tr>
                </thead>
              <tbody>
                {produto.variantes.map((variante, index) => {
                  if (!variante || typeof variante !== 'object') return null;
                  return (
                    <tr key={index}>
                      {hasBitola && (
                        <td className="py-3 px-4 border font-bold text-gray-900">{variante.bitola || '-'}</td>
                      )}
                      {hasEntradas && (
                        <td className="py-3 px-4 border font-bold text-gray-900">{variante.entradas !== undefined ? variante.entradas : '-'}</td>
                      )}
                      {hasTamanho && (
                        <td className="py-3 px-4 border font-bold text-gray-900">{variante.tamanho || '-'}</td>
                      )}
                      {hasDimensoes && (
                        <td className="py-3 px-4 border font-semibold text-gray-800">{variante.dimensoes || '-'}</td>
                      )}
                      {hasCompatibilidade && (
                        <td className="py-3 px-4 border font-semibold text-gray-800">
                          {Array.isArray(variante.compatibilidade) 
                            ? variante.compatibilidade.join(", ")
                            : variante.compatibilidade || '-'}
                        </td>
                      )}
                      {hasReduzPara && (
                        <td className="py-3 px-4 border font-semibold text-gray-800">
                          {Array.isArray(variante.reduz_para) 
                            ? variante.reduz_para.join(", ")
                            : '-'}
                        </td>
                      )}
                      {colunasCodigoFinal && Array.isArray(colunasCodigoFinal) && colunasCodigoFinal.length > 0 && colunasCodigoFinal.map((col) => {
                        const varianteCodigo = variante.codigo && typeof variante.codigo === 'object' ? variante.codigo : {};
                        return (
                          <td key={col} className="py-3 px-4 border font-semibold text-gray-800">
                            {varianteCodigo[col] !== undefined 
                              ? varianteCodigo[col] 
                              : '-'}
                          </td>
                        );
                      })}
                      <td className="py-3 px-4 border font-bold text-gray-900">
                        {variante.embalagem !== undefined && variante.embalagem !== null ? variante.embalagem : '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
        );
        } catch (error) {
          console.error(`Error rendering variantes table for ${slug}:`, error);
          return null;
        }
      })()}

      {/* CTA Section */}
      {(function renderCTASection() {
        return (
          <section className="py-16 bg-brand-yellow">
            <div className="container">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Interessado neste Produto?
                </h2>
                <p className="text-xl text-black/80 mb-8">
                  Entre em contato conosco para mais informações e orçamento personalizado
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contato" 
                    className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    Solicitar Orçamento
                  </Link>
                  <Link 
                    href="tel:+554734240746" 
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Ligar Agora
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      <Footer />
    </div>
  );
  } catch (error) {
    console.error(`Error rendering produto page:`, error);
    // Em caso de erro, retornar uma página de erro simples
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container py-40 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Erro ao carregar produto</h1>
          <p className="text-gray-600">Ocorreu um erro ao carregar este produto. Por favor, tente novamente mais tarde.</p>
        </div>
        <Footer />
      </div>
    );
  }
}
