import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProdutoBySlug, getProdutos } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface ProdutoPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const produtos = getProdutos();
  return produtos.map((produto) => ({
    slug: produto.slug,
  }));
}

export async function generateMetadata({ params }: ProdutoPageProps) {
  const produto = getProdutoBySlug(params.slug);
  
  if (!produto) {
    return {
      title: "Produto não encontrado",
    };
  }

  return {
    title: produto.nome,
    description: produto.descricao,
  };
}

export default function ProdutoPage({ params }: ProdutoPageProps) {
  const produto = getProdutoBySlug(params.slug);

  if (!produto) {
    notFound();
  }

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
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-yellow/20 text-brand-yellow mb-4">
              {produto.categoria}
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
                Linha {produto.categoria}
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
                  <span className="text-gray-900">{produto.fichaTecnica.material}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Capacidade:</span>
                  <span className="text-gray-900">{produto.fichaTecnica.capacidade}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Peso:</span>
                  <span className="text-gray-900">{produto.fichaTecnica.peso}</span>
                  </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium text-gray-700">Cores disponíveis:</span>
                  <span className="text-gray-900">{produto.cores.join(", ")}</span>
                </div>
              </div>
            </div>

            {/* Foto do Produto */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={produto.imagem}
                  alt={produto.nome}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela de Códigos */}
      <section className="px-4 md:px-10 lg:px-24 pb-12 overflow-x-auto">
        <div className="container">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Códigos e Especificações</h3>
          <table className="w-full border text-sm">
            <thead className="bg-zinc-100">
              <tr>
                <th className="py-3 px-4 border font-bold text-gray-900">Bitolas</th>
                <th className="py-3 px-4 border font-bold text-gray-900">Preto</th>
                <th className="py-3 px-4 border font-bold text-gray-900">Cinza</th>
                <th className="py-3 px-4 border font-bold text-gray-900">Cinza Claro</th>
                <th className="py-3 px-4 border font-bold text-gray-900">Branco Gelo</th>
                <th className="py-3 px-4 border font-bold text-gray-900">Vermelho</th>
                <th className="py-3 px-4 border font-bold text-gray-900">Embalagem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border font-bold text-gray-900">1/2"</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">44603002</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">46023002</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">77153002</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">47053002</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">48953002</td>
                <td className="py-3 px-4 border font-bold text-gray-900">50</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border font-bold text-gray-900">3/4"</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">44603004</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">46023004</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">77153004</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">47053004</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">48953004</td>
                <td className="py-3 px-4 border font-bold text-gray-900">50</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border font-bold text-gray-900">1"</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">44603006</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">46023006</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">77153006</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">47053006</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">48953006</td>
                <td className="py-3 px-4 border font-bold text-gray-900">20</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border font-bold text-gray-900">1.1/4"</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">44603008</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">46023008</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">77153008</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">47053008</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">48953008</td>
                <td className="py-3 px-4 border font-bold text-gray-900">20</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border font-bold text-gray-900">1.1/2"</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">44603010</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">46023010</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">77153010</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">47053010</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">48953010</td>
                <td className="py-3 px-4 border font-bold text-gray-900">20</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border font-bold text-gray-900">2"</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">44603012</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">46023012</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">77153012</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">47053012</td>
                <td className="py-3 px-4 border font-semibold text-gray-800">48953012</td>
                <td className="py-3 px-4 border font-bold text-gray-900">10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
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

      <Footer />
    </div>
  );
}
