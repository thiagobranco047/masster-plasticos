import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LinhaCinzaClaroContent from "./LinhaCinzaClaroContent";

export const metadata = {
  title: "Linha Cinza Claro - Eletrodutos em PVC | Masster Plásticos",
  description: "Conheça a linha de eletrodutos em PVC Cinza Claro da Masster Plásticos: alta qualidade, resistência e durabilidade para suas instalações elétricas.",
};

export default function LinhaCinzaClaroPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LinhaCinzaClaroContent />
      <Footer />
    </div>
  );
}

