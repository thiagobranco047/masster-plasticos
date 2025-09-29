import Button from "@/components/Button";

export default function Experiencia() {
  return (
    <section className="w-full section bg-white">
      <div className="container">
        <div className="space-y-32">
          {/* Header da seção */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-6">
              Mais de duas décadas de experiência no mercado
            </h1>
            <span className="text-lg text-zinc-700 leading-relaxed max-w-4xl mx-auto block">
              Aqui na Masster, a confiança é construída com base em mais de duas décadas de experiência no mercado de eletrodutos e acessórios em PVC. Nosso portfólio é ideal para obras residenciais, comerciais e industriais, com produtos pensados para atender às exigências técnicas e estéticas de cada projeto.
            </span>
          </div>

          {/* Conteúdo em duas colunas */}
          <div className="grid gap-20 md:grid-cols-2 items-center">
            {/* Coluna esquerda - Imagens */}
            <div className="relative h-[500px] rounded-lg overflow-visible">
              <div className="absolute inset-0 bg-[url('/images/home/bg-branco-gelo.png')] bg-cover bg-center rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/images/home/circuito-branco-gelo.png" 
                  alt="Produto em destaque" 
                  className="h-96 w-auto object-contain relative z-10 -mb-[250px]"
                />
              </div>
            </div>

            {/* Coluna direita - Conteúdo */}
            <div className="space-y-6">
              <small className="text-sm font-medium text-brand-yellow">Muito mais brilho</small>
              <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                Linha Branco Gelo
              </h3>
              <p className="text-zinc-700 leading-relaxed">
                Com pigmentação desenvolvida para garantir fidelidade de cor e resistência ao envelhecimento. Nosso segredo está no subtom azul acinzentado, que suaviza o contraste e proporciona harmonia ao ambiente.
              </p>
              <div className="space-y-3">
                <p className="text-zinc-700 leading-relaxed">
                  Ideais para instalações gerais como:
                </p>
                <p className="text-zinc-700 leading-relaxed font-bold">
                  Cozinha industrial, indústria alimentícia, frigoríficos, clínicas, laboratórios, hospitais entre outros.
                </p>
              </div>
              <div className="pt-4">
                <Button href="/produtos">Saiba mais</Button>
              </div>
            </div>
          </div>

          {/* Segunda seção - Layout invertido */}
          <div className="grid gap-10 md:grid-cols-2 items-center mb-32">
            {/* Coluna esquerda - Conteúdo */}
            <div className="space-y-6">
              <small className="text-sm font-medium text-brand-yellow">Muito mais fidelidade de cor</small>
              <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                Ambientes diferenciados
              </h3>
              <p className="text-zinc-700 leading-relaxed">
              Com toda a sua versatilidade, a linha elétrica Masster Plásticos transforma os ambientes e permite a criação de novos conceitos com identidade visual marcante e espaços únicos.
              </p>
              <div className="space-y-3">
                <p className="text-zinc-700 leading-relaxed font-bold">
                Fabricamos eletrodutos da linha Masster Eco em medidas especiais, para todas as versões (lisa, rosca e bolsa). Consulte preços para medidas em milímetros e para barras acima de 3 metros.
                </p>
              </div>
              <div className="pt-4">
                <Button href="/produtos">Saiba mais</Button>
              </div>
            </div>

            {/* Coluna direita - Imagens */}
            <div className="relative h-[500px] rounded-lg overflow-visible">
              <div className="absolute inset-0 bg-[url('/images/home/bg-preto.png')] bg-cover bg-center rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/images/home/circuito-preto.png" 
                  alt="Produto em destaque" 
                  className="h-96 w-auto object-contain relative z-10 -mb-[250px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
