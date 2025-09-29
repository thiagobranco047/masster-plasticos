
export default function BannerQualidade() {
  return (
    <>
      {/* Marquee */}
      <div className="w-full overflow-hidden bg-white mb-0">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-[#D1D5DB] mx-4">
              MASSTER PLÁSTICOS
            </span>
          ))}
        </div>
      </div>
      
      <section className="relative section -mt-0">
        <div className="absolute inset-0 -z-10">
          <img 
            src="/images/home/bg-desmonte.png" 
            alt="Background" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0" />
        </div>
        <div className="container grid gap-10 md:grid-cols-2 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-[600px]">
              <small className="text-sm font-medium text-brand-yellow">Tradição e confiança</small>
              <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight mt-2">
                Produtos de qualidade<br />
                e confiança para qualquer<br />
                tipo de projeto
              </h3>
              <div className="bg-white rounded-xl p-20 shadow-sm mt-6">
                <div className="border-t-2 border-brand-yellow mb-4"></div>
                <p className="text-[#475467] text-[15px] leading-[28px]">
                  Desde 1999, a Masster Plásticos tem como norte uma política de alta qualidade dos seus produtos* e serviços. Possuindo compromisso com a agilidade na entrega e uma equipe de atendimento qualificada para superar expectativas.
                  <br /><br />
                  A Masster é uma empresa sólida, estruturada comercialmente com políticas definidas para atender os diferentes players do mercado, distribuidores, atacados e varejistas de todo o território nacional.
                  <br /><br />
                  <span className="text-sm">*Recomendação de uso dos produtos Masster:<br />
                  Instalações abrigadas.</span>
                </p>
                <div className="border-t-2 border-brand-yellow mt-4"></div>
              </div>
            </div>
          </div>
          <div className="relative h-[720px] overflow-hidden flex justify-end">
            <img src="/images/home/circuito-selo.png" alt="Destaque" className="h-full object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}

