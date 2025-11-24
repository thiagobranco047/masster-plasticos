"use client";

import Image from "next/image";
import { useState } from "react";

const decorColorImages = [
  { cor: "Amarelo", src: "/images/masster-decor/amarelo.webp", alt: "Eletroduto Masster Decor amarelo" },
  { cor: "Azul", src: "/images/masster-decor/azul.webp", alt: "Eletroduto Masster Decor azul" },
  { cor: "Bege Creme", src: "/images/masster-decor/bege-creme.webp", alt: "Eletroduto Masster Decor bege creme" },
  { cor: "Cerâmica", src: "/images/masster-decor/ceramica.webp", alt: "Eletroduto Masster Decor cerâmica" },
  { cor: "Cinza Munsell", src: "/images/masster-decor/cinza-munsell.webp", alt: "Eletroduto Masster Decor cinza munsell" },
  { cor: "Cinza Normal", src: "/images/masster-decor/cinza-normal.webp", alt: "Eletroduto Masster Decor cinza normal" },
  { cor: "Rosa Bebê", src: "/images/masster-decor/rosa-bebe.webp", alt: "Eletroduto Masster Decor rosa bebê" },
  { cor: "Rosa Pink", src: "/images/masster-decor/rosa-pink.webp", alt: "Eletroduto Masster Decor rosa pink" },
  { cor: "Verde", src: "/images/masster-decor/verde.webp", alt: "Eletroduto Masster Decor verde" },
] as const;

type LightboxImage = {
  src: string;
  title?: string;
  alt?: string;
};

export default function MassterDecorContent() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/masster-decor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar solicitação");
      }

      setIsSubmitted(true);
      setFormData({
        nome: "",
        email: "",
        empresa: "",
        mensagem: "",
      });
    } catch (err) {
      console.error("Erro ao enviar cotação Masster Decor:", err);
      alert(err instanceof Error ? err.message : "Erro ao enviar solicitação. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openImageLightbox = (image: LightboxImage) => {
    setActiveImage(image);
  };

  const closeImageLightbox = () => {
    setActiveImage(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-40 pb-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/internas/bg-topo-internas.png)' }}
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Masster Decor: <span className="text-brand-yellow">originalidade</span> e personalidade
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Desenvolvemos projetos coloridos sob demanda para sua empresa ou obra
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Conteúdo */}
      <section className="py-16 bg-white">
        <div className="container">
          <article className="max-w-4xl mx-auto">
            <button
              type="button"
              onClick={() =>
                openImageLightbox({
                  src: "/images/masster-decor/conjunto-sequencia.webp",
                  alt: "Conjunto de eletrodutos Masster Decor em sequência de cores",
                  title: "Linha Masster Decor",
                })
              }
              className="group relative w-full aspect-[16/9] rounded-3xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
            >
              <Image
                src="/images/masster-decor/conjunto-sequencia.webp"
                alt="Conjunto de eletrodutos Masster Decor em sequência de cores"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 70vw"
                className="object-contain p-4"
              />
            </button>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                Com a linha Masster Decor, você pode solicitar eletrodutos, abraçadeiras, tampas e conexões em diversas cores — ideais para projetos visuais modernos, ambientes personalizados, instalações aparentes, espaços comerciais ou educacionais que exigem criatividade e cor.
              </p>
            </div>

            {/* Sub-seção: Cores e Aplicações */}
            <div className="mt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Confira as opções de cores e aplicações
              </h2>

              {/* Grid de produtos coloridos - Layout pronto para imagens */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {decorColorImages.map((item) => (
                  <button
                    key={item.cor}
                    type="button"
                    onClick={() =>
                      openImageLightbox({
                        src: item.src,
                        title: item.cor,
                        alt: item.alt,
                      })
                    }
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow p-3"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 30vw"
                      className="object-contain p-6"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="text-gray-900 font-semibold text-lg">{item.cor}</h3>
                    </div>
                  </button>
                ))}
              </div>

              {/* Texto explicativo adicional */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed text-center">
                  Nossa linha Masster Decor oferece uma ampla gama de cores vibrantes e personalizadas. 
                  Todos os produtos podem ser fabricados nas cores de sua preferência, permitindo total 
                  personalização do seu projeto. Entre em contato para conhecer todas as opções disponíveis.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Seção de Formulário */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Entre em contato e faça uma cotação
            </h2>

            {isSubmitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Mensagem enviada com sucesso!
                </h3>
                <p className="text-green-700">
                  Nossa equipe entrará em contato em breve.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
              >
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow text-gray-900 placeholder-gray-500"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow text-gray-900 placeholder-gray-500"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow text-gray-900 placeholder-gray-500"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={5}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow text-gray-900 placeholder-gray-500 resize-none"
                    placeholder="Conte-nos sobre seu projeto e quais cores você deseja..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-yellow text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-yellow/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar orçamento"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={closeImageLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar visualização da imagem"
              className="absolute -top-12 right-0 text-white hover:text-brand-yellow transition-colors"
              onClick={closeImageLightbox}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative bg-black/30 rounded-2xl p-4">
              <Image
                src={activeImage.src}
                alt={activeImage.alt ?? "Visualização ampliada"}
                width={1000}
                height={800}
                className="object-contain w-full max-h-[80vh] mx-auto rounded-xl"
                priority
              />
              {activeImage.title && (
                <div className="absolute bottom-4 left-6 right-6 bg-black/70 text-white rounded-xl px-4 py-3">
                  <p className="text-lg font-semibold">{activeImage.title}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

