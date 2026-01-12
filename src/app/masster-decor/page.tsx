import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MassterDecorContent from "./MassterDecorContent";

export const metadata = {
  title: "Masster Decor - Originalidade e Personalidade | Masster Plásticos",
  description: "Conheça a linha Masster Decor: eletrodutos, abraçadeiras, tampas e conexões em diversas cores para projetos visuais modernos e personalizados. Eletrodutos coloridos para instalações aparentes e projetos autorais.",
  keywords: [
    "Masster Decor",
    "eletrodutos coloridos",
    "eletrodutos decorativos",
    "instalações aparentes",
    "projetos autorais",
    "eletrodutos PVC coloridos",
    "acessórios elétricos coloridos",
  ],
  openGraph: {
    title: "Masster Decor - Originalidade e Personalidade | Masster Plásticos",
    description: "Conheça a linha Masster Decor: eletrodutos, abraçadeiras, tampas e conexões em diversas cores para projetos visuais modernos e personalizados.",
    url: "https://www.massterplasticos.com.br/masster-decor",
    siteName: "Masster Plásticos",
    type: "website",
  },
  alternates: {
    canonical: "https://www.massterplasticos.com.br/masster-decor",
  },
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
