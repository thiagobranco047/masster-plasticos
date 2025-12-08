type Feature = {
  title: string;
  desc: string;
};

const features: Feature[] = [
  { title: "Muito mais prático", desc: "Design pensado para instalação rápida e eficiente." },
  { title: "Alta fidelidade de cor", desc: "Matéria-prima de alta qualidade com controle rigoroso." },
  { title: "Resistente ao envelhecimento", desc: "Durabilidade superior para diferentes ambientes." },
  { title: "Excelente acabamento", desc: "Padrão de qualidade com ótimo acabamento e encaixes." },
];

export default function GridFeatures() {
  return (
    <section className="w-full section bg-white">
      <div className="container">
        <h2 className="section-title text-center">Qualidade em cada produto</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">Linha limpa, materiais de alta confiança e encaixes precisos garantem uma instalação segura e durável.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-7 transition-opacity duration-300 hover:opacity-60 cursor-pointer">
            <div className="text-3xl font-extrabold text-brand-yellow">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-3 text-lg font-semibold text-black">{f.title}</h3>
            <p className="mt-2 text-sm text-zinc-700 leading-relaxed">{f.desc}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

