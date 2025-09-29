const stats = [
  { value: "4000 m²", label: "de parque fabril" },
  { value: "200+", label: "colaboradores" },
  { value: "150+", label: "representantes" },
  { value: "500+", label: "pontos de venda" },
];

export default function Stats() {
  return (
    <section className="text-white" style={{ backgroundColor: '#2B2C2C' }}>
      <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center transition-all duration-300 hover:scale-105 hover:opacity-90 cursor-pointer">
            <div className="text-2xl md:text-3xl font-bold tracking-tight">{s.value}</div>
            <div className="text-sm text-white/80 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

