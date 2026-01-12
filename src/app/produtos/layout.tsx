import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Produtos | Masster Plásticos",
  description: "Explore nossa linha completa de produtos: eletrodutos PVC, acessórios elétricos, caixas, conduletes, tampas e muito mais. Filtre por linha (Masster Plus, Masster Eco, Masster Decor, Classe A) ou categoria.",
  keywords: [
    "produtos Masster Plásticos",
    "eletrodutos PVC",
    "acessórios elétricos",
    "caixas elétricas",
    "conduletes",
    "tampas elétricas",
    "luvas elétricas",
    "curvas elétricas",
    "Masster Plus",
    "Masster Eco",
    "Masster Decor",
    "Classe A",
  ],
  openGraph: {
    title: "Produtos | Masster Plásticos",
    description: "Explore nossa linha completa de produtos: eletrodutos PVC, acessórios elétricos, caixas, conduletes e muito mais.",
    url: "https://www.massterplasticos.com.br/produtos",
    siteName: "Masster Plásticos",
    type: "website",
  },
  alternates: {
    canonical: "https://www.massterplasticos.com.br/produtos",
  },
}

export default function ProdutosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
