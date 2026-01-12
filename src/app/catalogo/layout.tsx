import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Catálogo | Masster Plásticos",
  description: "Solicite nosso catálogo completo de produtos. Receba em seu e-mail todas as informações sobre nossa linha de eletrodutos PVC, acessórios elétricos, caixas, conduletes e muito mais.",
  keywords: [
    "catálogo Masster Plásticos",
    "catálogo eletrodutos",
    "catálogo produtos elétricos",
    "download catálogo",
    "solicitar catálogo",
  ],
  openGraph: {
    title: "Catálogo | Masster Plásticos",
    description: "Solicite nosso catálogo completo de produtos. Receba em seu e-mail todas as informações sobre nossa linha completa.",
    url: "https://www.massterplasticos.com.br/catalogo",
    siteName: "Masster Plásticos",
    type: "website",
  },
  alternates: {
    canonical: "https://www.massterplasticos.com.br/catalogo",
  },
}

export default function CatalogoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
