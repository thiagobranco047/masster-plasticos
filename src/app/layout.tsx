import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    default: "Masster Plásticos",
    template: "%s | Masster Plásticos",
  },
  description:
    "Soluções em plásticos: qualidade, durabilidade e inovação para o seu dia a dia.",
  openGraph: {
    title: "Masster Plásticos",
    description:
      "Soluções em plásticos: qualidade, durabilidade e inovação para o seu dia a dia.",
    url: "/",
    siteName: "Masster Plásticos",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Masster Plásticos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Masster Plásticos",
    description:
      "Soluções em plásticos: qualidade, durabilidade e inovação para o seu dia a dia.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
