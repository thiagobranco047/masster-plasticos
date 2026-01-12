import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300","400","500","600","700","800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.massterplasticos.com.br"),
  title: {
    default: "Masster Plásticos | Soluções em Eletrodutos e Acessórios PVC",
    template: "%s | Masster Plásticos",
  },
  description:
    "Masster Plásticos: líder em soluções plásticas de alta qualidade. Eletrodutos PVC, acessórios, caixas e conduletes para instalações elétricas. Linhas Masster Plus, Masster Eco, Masster Decor e Classe A. Mais de 20 anos de experiência.",
  keywords: [
    "eletrodutos PVC",
    "eletrodutos plásticos",
    "acessórios elétricos",
    "caixas elétricas",
    "conduletes",
    "Masster Plásticos",
    "instalações elétricas",
    "PVC classe A",
    "Masster Plus",
    "Masster Eco",
    "Masster Decor",
    "eletrodutos roscáveis",
    "luvas elétricas",
    "curvas elétricas",
    "tampas elétricas",
    "Araquari SC",
    "plásticos industriais",
    "ABNT NBR 15465",
  ],
  authors: [{ name: "Masster Plásticos" }],
  creator: "Masster Plásticos",
  publisher: "Masster Plásticos",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.massterplasticos.com.br",
    siteName: "Masster Plásticos",
    title: "Masster Plásticos | Soluções em Eletrodutos e Acessórios PVC",
    description:
      "Líder em soluções plásticas de alta qualidade. Eletrodutos PVC, acessórios, caixas e conduletes para instalações elétricas. Mais de 20 anos de experiência.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Masster Plásticos - Soluções em Eletrodutos e Acessórios PVC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masster Plásticos | Soluções em Eletrodutos e Acessórios PVC",
    description:
      "Líder em soluções plásticas de alta qualidade. Eletrodutos PVC, acessórios, caixas e conduletes para instalações elétricas.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  verification: {
    // Adicione aqui quando tiver verificação do Google Search Console
    // google: "seu-codigo-de-verificacao",
  },
  category: "Indústria e Manufatura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data - Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Masster Plásticos",
    url: "https://www.massterplasticos.com.br",
    logo: "https://www.massterplasticos.com.br/og-image.png",
    description: "Líder em soluções plásticas de alta qualidade. Eletrodutos PVC, acessórios, caixas e conduletes para instalações elétricas.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida das Industrias, 778",
      addressLocality: "Araquari",
      addressRegion: "SC",
      postalCode: "89245-000",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-47-3424-0746",
      contactType: "Vendas",
      areaServed: "BR",
      availableLanguage: "pt-BR",
    },
    sameAs: [
      // Adicione links de redes sociais quando disponíveis
    ],
  };

  // Structured Data - LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Masster Plásticos",
    image: "https://www.massterplasticos.com.br/og-image.png",
    "@id": "https://www.massterplasticos.com.br",
    url: "https://www.massterplasticos.com.br",
    telephone: "+55-47-3424-0746",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida das Industrias, 778",
      addressLocality: "Araquari",
      addressRegion: "SC",
      postalCode: "89245-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.3708,
      longitude: -48.7186,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  };

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7TD1QV4303"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7TD1QV4303');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
