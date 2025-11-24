import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MassterDecorContent from "./MassterDecorContent";

export const metadata = {
  title: "Masster Decor - Originalidade e Personalidade | Masster Plásticos",
  description: "Conheça a linha Masster Decor: eletrodutos, abraçadeiras, tampas e conexões em diversas cores para projetos visuais modernos e personalizados.",
};

export default function MassterDecorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MassterDecorContent />
      <Footer />
    </div>
  );
}
