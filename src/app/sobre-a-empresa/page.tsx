import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Sobre a Empresa | Masster Plásticos",
  description: "Conheça a história, missão e valores da Masster Plásticos. Fundada em 1999, somos líderes em soluções plásticas de alta qualidade com mais de 20 anos de experiência. Certificações ABNT NBR ISO/IEC 17025 e ABNT NBR 15465:2020.",
  keywords: [
    "Masster Plásticos",
    "sobre Masster",
    "história Masster Plásticos",
    "empresa plásticos",
    "certificações plásticos",
    "qualidade plásticos",
    "Araquari SC",
    "indústria plásticos Brasil",
  ],
  openGraph: {
    title: "Sobre a Empresa | Masster Plásticos",
    description: "Conheça a história, missão e valores da Masster Plásticos. Mais de 20 anos de experiência em soluções plásticas de alta qualidade.",
    url: "https://www.massterplasticos.com.br/sobre-a-empresa",
    siteName: "Masster Plásticos",
    images: [
      {
        url: "https://www.massterplasticos.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Masster Plásticos - Sobre a Empresa",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://www.massterplasticos.com.br/sobre-a-empresa",
  },
};

export default function SobrePage() {
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
              Sobre a <span className="text-brand-yellow">Masster Plásticos</span>
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Há mais de duas décadas, somos referência em soluções plásticas inovadoras, 
              oferecendo qualidade, durabilidade e excelência para diversos segmentos industriais.
            </p>
          </div>
        </div>
      </section>

      {/* História da Empresa */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fundada em 1999, a Masster Plásticos nasceu com a missão de revolucionar 
                  o mercado de plásticos no Brasil. Desde o início, nossa empresa se 
                  destacou pela inovação e compromisso com a qualidade.
                </p>
                <p>
                  Ao longo dos anos, expandimos nossa linha de produtos e desenvolvemos 
                  tecnologias avançadas que nos posicionaram como líderes no segmento. 
                  Hoje, atendemos clientes em todo o território nacional, sempre 
                  mantendo nossos valores de excelência e sustentabilidade.
                </p>
                <p>
                  Nossa trajetória é marcada por conquistas importantes, certificações 
                  de qualidade e o reconhecimento de nossos clientes como parceiros 
                  confiáveis e inovadores.
                </p>
                <p>
                  Hoje, com três unidades operacionais em Araquari-SC, atendemos clientes 
                  em todo o território nacional, sempre mantendo nossos valores de excelência 
                  e sustentabilidade.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-yellow/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-brand-yellow mb-2">+ de 20</div>
                    <div className="text-sm text-gray-600">Anos de Experiência</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brand-yellow mb-2">+ de 1000</div>
                    <div className="text-sm text-gray-600">Produtos Desenvolvidos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brand-yellow mb-2">+ de 4000</div>
                    <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brand-yellow mb-2">+ de 20</div>
                    <div className="text-sm text-gray-600">Estados Atendidos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foto da Fachada */}
      <section className="py-16">
        <div className="container">
          <div className="w-full">
            <Image
              src="/images/fachada-masster.webp"
              alt="Fachada da Masster Plásticos"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Pilares</h2>
            <p className="text-xl text-gray-600">Os valores que guiam nossa empresa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Missão */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Facilitar a vida das pessoas, entregando segurança, estilo e praticidade.
                </p>
              </div>
            </div>

            {/* Propósito */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V3m0 18v-5m9-4h-5m-8 0H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Propósito</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deixar um legado ético e responsável, cuidando de pessoas e transformando vidas.
                </p>
              </div>
            </div>

            {/* Visão */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Consolidar no mercado brasileiro a evidente qualidade dos nossos produtos e serviços.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Valores</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pessoas, ética, sustentabilidade, confiança e respeito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h2>
            <p className="text-xl text-gray-600">O que nos torna únicos no mercado</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600 text-sm">Produtos certificados com rigorosos controles de qualidade</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inovação Constante</h3>
              <p className="text-gray-600 text-sm">Pesquisa e desenvolvimento de novas tecnologias</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustentabilidade</h3>
              <p className="text-gray-600 text-sm">Compromisso com práticas ambientalmente responsáveis</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-600 text-sm">Suporte especializado para cada necessidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificações e Qualidade</h2>
            <p className="text-xl text-gray-600">Reconhecimento da excelência dos nossos processos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ABNT NBR ISO/IEC 17025</h3>
              <p className="text-gray-600">
                Estabelece os requisitos para a competência de laboratórios de ensaio e calibração.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ABNT NBR 15465:2020</h3>
              <p className="text-gray-600">
                Sistemas de eletrodutos plásticos para instalações de baixa tensão. Requisitos de desempenho.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
