import type { Produto } from "@/lib/types";

export const produtos: Produto[] = [
  {
    nome: "Balde 12L Masster Plus",
    slug: "balde-12l-masster-plus",
    descricao: "Balde resistente com alça reforçada, ideal para uso doméstico e profissional.",
    imagem: "/images/produtos/balde-12l.jpg",
    cores: ["Amarelo", "Preto", "Cinza", "Branco"],
    categoria: "Masster Plus",
    fichaTecnica: {
      material: "PP",
      capacidade: "12L",
      peso: "450g"
    },
    medidas: [
      { codigo: "12L", altura: 280, diametro: 290, peso: 450 }
    ],
    galeria: [
      "/images/produtos/balde-12l-1.jpg",
      "/images/produtos/balde-12l-2.jpg"
    ]
  },
  {
    nome: "Balde 20L Masster Plus",
    slug: "balde-20l-masster-plus",
    descricao: "Balde de maior capacidade, perfeito para uso industrial e comercial.",
    imagem: "/images/produtos/balde-20l.jpg",
    cores: ["Amarelo", "Preto", "Cinza", "Branco"],
    categoria: "Masster Plus",
    fichaTecnica: {
      material: "PP",
      capacidade: "20L",
      peso: "750g"
    },
    medidas: [
      { codigo: "20L", altura: 320, diametro: 350, peso: 750 }
    ],
    galeria: [
      "/images/produtos/balde-20l-1.jpg",
      "/images/produtos/balde-20l-2.jpg"
    ]
  },
  {
    nome: "Lixeira 50L Decor",
    slug: "lixeira-50l-decor",
    descricao: "Design moderno, tampa basculante, diversas cores.",
    imagem: "/images/produtos/lixeira-50l.jpg",
    cores: ["Preto", "Cinza"],
    categoria: "Decor",
    fichaTecnica: {
      material: "PP",
      capacidade: "50L",
      peso: "1500g"
    },
    medidas: [
      { codigo: "50L", altura: 700, largura: 380, profundidade: 380, peso: 1500 }
    ],
    galeria: [
      "/images/produtos/lixeira-50l-1.jpg",
      "/images/produtos/lixeira-50l-2.jpg"
    ]
  },
  {
    nome: "Lixeira 30L Decor",
    slug: "lixeira-30l-decor",
    descricao: "Lixeira compacta com design elegante para ambientes residenciais.",
    imagem: "/images/produtos/lixeira-30l.jpg",
    cores: ["Preto", "Cinza", "Branco"],
    categoria: "Decor",
    fichaTecnica: {
      material: "PP",
      capacidade: "30L",
      peso: "900g"
    },
    medidas: [
      { codigo: "30L", altura: 600, largura: 320, profundidade: 320, peso: 900 }
    ],
    galeria: [
      "/images/produtos/lixeira-30l-1.jpg",
      "/images/produtos/lixeira-30l-2.jpg"
    ]
  },
  {
    nome: "Vaso 15L Eco",
    slug: "vaso-15l-eco",
    descricao: "Vaso sustentável feito com material reciclado, ideal para jardinagem.",
    imagem: "/images/produtos/vaso-15l.jpg",
    cores: ["Verde", "Marrom", "Preto"],
    categoria: "Eco",
    fichaTecnica: {
      material: "PP Reciclado",
      capacidade: "15L",
      peso: "600g"
    },
    medidas: [
      { codigo: "15L", altura: 250, diametro: 300, peso: 600 }
    ],
    galeria: [
      "/images/produtos/vaso-15l-1.jpg",
      "/images/produtos/vaso-15l-2.jpg"
    ]
  },
  {
    nome: "Vaso 25L Eco",
    slug: "vaso-25l-eco",
    descricao: "Vaso maior para plantas de grande porte, material 100% reciclável.",
    imagem: "/images/produtos/vaso-25l.jpg",
    cores: ["Verde", "Marrom", "Preto"],
    categoria: "Eco",
    fichaTecnica: {
      material: "PP Reciclado",
      capacidade: "25L",
      peso: "950g"
    },
    medidas: [
      { codigo: "25L", altura: 300, diametro: 350, peso: 950 }
    ],
    galeria: [
      "/images/produtos/vaso-25l-1.jpg",
      "/images/produtos/vaso-25l-2.jpg"
    ]
  },
  {
    nome: "Caixa Organizadora Classe A",
    slug: "caixa-organizadora-classe-a",
    descricao: "Caixa organizadora com certificação internacional, máxima qualidade.",
    imagem: "/images/produtos/caixa-organizadora.jpg",
    cores: ["Transparente", "Branco", "Preto"],
    categoria: "Classe A",
    fichaTecnica: {
      material: "PP Premium",
      capacidade: "40L",
      peso: "1200g"
    },
    medidas: [
      { codigo: "40L", altura: 200, largura: 400, profundidade: 300, peso: 1200 }
    ],
    galeria: [
      "/images/produtos/caixa-organizadora-1.jpg",
      "/images/produtos/caixa-organizadora-2.jpg"
    ]
  },
  {
    nome: "Caixa Arquivo Classe A",
    slug: "caixa-arquivo-classe-a",
    descricao: "Caixa para arquivo com tampa articulada, ideal para escritórios.",
    imagem: "/images/produtos/caixa-arquivo.jpg",
    cores: ["Transparente", "Branco", "Azul"],
    categoria: "Classe A",
    fichaTecnica: {
      material: "PP Premium",
      capacidade: "25L",
      peso: "800g"
    },
    medidas: [
      { codigo: "25L", altura: 150, largura: 350, profundidade: 250, peso: 800 }
    ],
    galeria: [
      "/images/produtos/caixa-arquivo-1.jpg",
      "/images/produtos/caixa-arquivo-2.jpg"
    ]
  }
];
