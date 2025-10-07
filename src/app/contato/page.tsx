import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contato",
  description: "Entre em contato com a Masster Plásticos. Estamos prontos para atender suas necessidades e fornecer soluções personalizadas.",
};

export default function ContatoPage() {
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
              Entre em <span className="text-brand-yellow">Contato</span>
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Estamos prontos para atender suas necessidades e fornecer soluções 
              personalizadas para seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                      placeholder="seu@email.com"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                      placeholder="(47) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="informacoes">Informações sobre Produtos</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="parceria">Parceria Comercial</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                    placeholder="Descreva sua necessidade ou dúvida..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-yellow text-black px-8 py-3 rounded-lg font-medium hover:bg-brand-yellow/90 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
              
              <div className="space-y-8">
                {/* Telefones */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Telefones</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Telefone Principal</p>
                        <a href="tel:+554734240746" className="text-brand-yellow hover:text-brand-yellow/80">
                          (47) 3424-0746
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">WhatsApp</p>
                        <a href="tel:+554799785-0103" className="text-brand-yellow hover:text-brand-yellow/80">
                          (47) 99785-0103
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* E-mail */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">E-mail</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">E-mail Comercial</p>
                      <a href="mailto:gerentecomercial@massterplasticos.com.br" className="text-brand-yellow hover:text-brand-yellow/80">
                        gerentecomercial@massterplasticos.com.br
                      </a>
                    </div>
                  </div>
                </div>

                {/* Endereço */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Endereço</h3>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Masster Plásticos</p>
                      <address className="text-gray-600 not-italic">
                        Avenida das Indústrias, 778<br />
                        Porto Grande<br />
                        Araquari - SC<br />
                        CEP: 89.245-000
                      </address>
                    </div>
                  </div>
                </div>

                {/* Horário de Funcionamento */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Horário de Funcionamento</h3>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="space-y-1 text-gray-600">
                        <p><span className="font-medium">Segunda a Sexta:</span> 8h às 18h</p>
                        <p><span className="font-medium">Sábado:</span> 8h às 12h</p>
                        <p><span className="font-medium">Domingo:</span> Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Localização</h2>
            <p className="text-xl text-gray-600">Venha nos visitar em nossa sede</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-500">Mapa interativo será implementado aqui</p>
                <p className="text-sm text-gray-400 mt-2">
                  Avenida das Indústrias, 778 - Porto Grande, Araquari - SC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Tire suas dúvidas mais comuns</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Qual o prazo de entrega dos produtos?
              </h3>
              <p className="text-gray-600">
                O prazo de entrega varia conforme o produto e quantidade solicitada. 
                Em geral, produtos em estoque são entregues em até 5 dias úteis, 
                enquanto produtos sob encomenda podem levar de 15 a 30 dias úteis.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Vocês fazem produtos personalizados?
              </h3>
              <p className="text-gray-600">
                Sim! Desenvolvemos produtos personalizados conforme a necessidade do cliente. 
                Entre em contato conosco para discutir seu projeto e receber um orçamento.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Qual a área de atendimento?
              </h3>
              <p className="text-gray-600">
                Atendemos todo o território nacional através de nossa rede de representantes 
                e distribuidores. Para informações sobre representantes em sua região, 
                entre em contato conosco.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Vocês oferecem suporte técnico?
              </h3>
              <p className="text-gray-600">
                Sim! Nossa equipe técnica está disponível para orientar sobre a aplicação 
                correta dos produtos, especificações técnicas e resolução de dúvidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
