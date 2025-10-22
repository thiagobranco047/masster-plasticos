import type { Produto } from "@/lib/types";

export const produtos: Produto[] = [
  // LINHA CLASSE A
  {
    id: "C001",
    nome: "Curva Longa 90° com Bolsa - Classe A",
    slug: "curva-longa-90-com-bolsa-classe-a",
    categoria: "Condução",
    linha: "Classe A",
    descricao: "Curva longa 90° com bolsa em PVC Classe A para instalações elétricas de alta qualidade.",
    aplicacao: "Mudança de direção em eletrodutos aparentes com acabamento superior.",
    cores_disponiveis: ["Cinza Munsell"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Cinza Munsell": "C001002"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Cinza Munsell": "C001004"
        }
      }
    ],
    embalagem: {
      "1/2\"": 20,
      "3/4\"": 20
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC Classe A",
    imagem: "/images/linhas/linha-classe-a/curva-longa-90-com-bolsa.webp",
    pdf_ficha_tecnica: "/pdfs/curva-longa-90-com-bolsa-classe-a.pdf"
  },
  {
    id: "C002",
    nome: "Curva Longa 90° Lisa - Classe A",
    slug: "curva-longa-90-lisa-classe-a",
    categoria: "Condução",
    linha: "Classe A",
    descricao: "Curva longa 90° lisa em PVC Classe A para instalações embutidas de alta qualidade.",
    aplicacao: "Mudança de direção em conduítes internos com acabamento superior.",
    cores_disponiveis: ["Cinza Munsell"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Cinza Munsell": "C002002"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Cinza Munsell": "C002004"
        }
      }
    ],
    embalagem: {
      "1/2\"": 30,
      "3/4\"": 30
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC Classe A",
    imagem: "/images/linhas/linha-classe-a/curva-longa-90-lisa.webp",
    pdf_ficha_tecnica: "/pdfs/curva-longa-90-lisa-classe-a.pdf"
  },
  {
    id: "C003",
    nome: "Curva Longa 90° Roscável - Classe A",
    slug: "curva-longa-90-roscavel-classe-a",
    categoria: "Condução",
    linha: "Classe A",
    descricao: "Curva longa 90° roscável em PVC Classe A para conexões com peças metálicas.",
    aplicacao: "Mudança de direção com conexão roscada em instalações de alta qualidade.",
    cores_disponiveis: ["Cinza Munsell"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Cinza Munsell": "C003002"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Cinza Munsell": "C003004"
        }
      }
    ],
    embalagem: {
      "1/2\"": 25,
      "3/4\"": 25
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC Classe A",
    imagem: "/images/linhas/linha-classe-a/curva-longa-90-roscavel.webp",
    pdf_ficha_tecnica: "/pdfs/curva-longa-90-roscavel-classe-a.pdf"
  },
  {
    id: "C004",
    nome: "Eletroduto de PVC Ponta Lisa - Classe A",
    slug: "eletroduto-pvc-ponta-lisa-classe-a",
    categoria: "Eletrodutos",
    linha: "Classe A",
    descricao: "Eletroduto de PVC ponta lisa Classe A para instalações elétricas de alta qualidade.",
    aplicacao: "Instalações elétricas de baixa tensão com acabamento superior.",
    cores_disponiveis: ["Cinza Munsell"],
    bitolas: [
      {
        bitola: "1/2\" x 3m",
        codigo: {
          "Cinza Munsell": "C004002"
        }
      },
      {
        bitola: "3/4\" x 3m",
        codigo: {
          "Cinza Munsell": "C004004"
        }
      },
      {
        bitola: "1\" x 3m",
        codigo: {
          "Cinza Munsell": "C004006"
        }
      }
    ],
    embalagem: {
      "1/2\" x 3m": 25,
      "3/4\" x 3m": 25,
      "1\" x 3m": 20
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC Classe A",
    imagem: "/images/linhas/linha-classe-a/eletroduto-de-pvc-ponta-lisa.webp",
    pdf_ficha_tecnica: "/pdfs/eletroduto-pvc-ponta-lisa-classe-a.pdf"
  },
  {
    id: "C005",
    nome: "Eletroduto de PVC Roscável - Classe A",
    slug: "eletroduto-pvc-roscavel-classe-a",
    categoria: "Eletrodutos",
    linha: "Classe A",
    descricao: "Eletroduto de PVC roscável Classe A para conexões com peças metálicas.",
    aplicacao: "Instalações elétricas com conexões roscadas de alta qualidade.",
    cores_disponiveis: ["Cinza Munsell"],
    bitolas: [
      {
        bitola: "1/2\" x 3m",
        codigo: {
          "Cinza Munsell": "C005002"
        }
      },
      {
        bitola: "3/4\" x 3m",
        codigo: {
          "Cinza Munsell": "C005004"
        }
      }
    ],
    embalagem: {
      "1/2\" x 3m": 25,
      "3/4\" x 3m": 25
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC Classe A",
    imagem: "/images/linhas/linha-classe-a/eletroduto-de-pvc-roscavel.webp",
    pdf_ficha_tecnica: "/pdfs/eletroduto-pvc-roscavel-classe-a.pdf"
  },
  {
    id: "C006",
    nome: "Luva Lisa com Divisória - Classe A",
    slug: "luva-lisa-com-divisoria-classe-a",
    categoria: "Acessórios",
    linha: "Classe A",
    descricao: "Luva lisa com divisória em PVC Classe A para emenda de eletrodutos.",
    aplicacao: "Unir dois eletrodutos com divisória interna para organização de condutores.",
    cores_disponiveis: ["Cinza Munsell"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Cinza Munsell": "C006002"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Cinza Munsell": "C006004"
        }
      }
    ],
    embalagem: {
      "1/2\"": 50,
      "3/4\"": 50
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC Classe A",
    imagem: "/images/linhas/linha-classe-a/luva-lisa-com-divisoria.webp",
    pdf_ficha_tecnica: "/pdfs/luva-lisa-com-divisoria-classe-a.pdf"
  },
  {
    id: "C007",
    nome: "Luva Roscável com Divisória - Classe A",
    slug: "luva-roscavel-com-divisoria-classe-a",
    categoria: "Acessórios",
    linha: "Classe A",
    descricao: "Luva roscável com divisória em PVC Classe A para conexões com peças metálicas.",
    aplicacao: "Unir eletrodutos com conexões roscadas e divisória interna.",
    cores_disponiveis: ["Cinza Munsell"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Cinza Munsell": "C007002"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Cinza Munsell": "C007004"
        }
      }
    ],
    embalagem: {
      "1/2\"": 50,
      "3/4\"": 50
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC Classe A",
    imagem: "/images/linhas/linha-classe-a/luva-roscavel-com-divisoria.webp",
    pdf_ficha_tecnica: "/pdfs/luva-roscavel-com-divisoria-classe-a.pdf"
  },

  // LINHA MASSTER ECO
  {
    id: "E001",
    nome: "Curva Longa 180° Roscável - Eco",
    slug: "curva-longa-180-roscavel-eco",
    categoria: "Condução",
    linha: "Eco",
    descricao: "Curva longa 180° roscável em PVC reciclado para instalações sustentáveis.",
    aplicacao: "Mudança de direção completa em eletrodutos com conexões roscadas sustentáveis.",
    cores_disponiveis: ["Cinza Eco"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Cinza Eco": "E001002"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Cinza Eco": "E001004"
        }
      }
    ],
    embalagem: {
      "1/2\"": 20,
      "3/4\"": 20
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC reciclado",
    imagem: "/images/linhas/linha-masster-eco/curva-longa-180-roscavel.webp",
    pdf_ficha_tecnica: "/pdfs/curva-longa-180-roscavel-eco.pdf"
  },
  {
    id: "E002",
    nome: "Curva Longa 45° - Eco",
    slug: "curva-longa-45-eco",
    categoria: "Condução",
    linha: "Eco",
    descricao: "Curva longa 45° em PVC reciclado para mudanças de direção suaves.",
    aplicacao: "Mudança de direção suave em eletrodutos sustentáveis.",
    cores_disponiveis: ["Cinza Eco"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Cinza Eco": "E002002"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Cinza Eco": "E002004"
        }
      }
    ],
    embalagem: {
      "1/2\"": 30,
      "3/4\"": 30
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC reciclado",
    imagem: "/images/linhas/linha-masster-eco/curva-longa-45.webp",
    pdf_ficha_tecnica: "/pdfs/curva-longa-45-eco.pdf"
  },
  {
    id: "E003",
    nome: "Curva Longa 90° com Bolsa - Eco",
    slug: "curva-longa-90-com-bolsa-eco",
    categoria: "Condução",
    linha: "Eco",
    descricao: "Curva longa 90° com bolsa em PVC reciclado para instalações sustentáveis.",
    aplicacao: "Mudança de direção em eletrodutos aparentes sustentáveis.",
    cores_disponiveis: ["Cinza Eco"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Cinza Eco": "E003002"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Cinza Eco": "E003004"
        }
      }
    ],
    embalagem: {
      "1/2\"": 25,
      "3/4\"": 25
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC reciclado",
    imagem: "/images/linhas/linha-masster-eco/curva-longa-90-com-bolsa.webp",
    pdf_ficha_tecnica: "/pdfs/curva-longa-90-com-bolsa-eco.pdf"
  },
  {
    id: "E004",
    nome: "Curva Longa 90° - Eco",
    slug: "curva-longa-90-eco",
    categoria: "Condução",
    linha: "Eco",
    descricao: "Curva longa 90° em PVC reciclado para instalações embutidas sustentáveis.",
    aplicacao: "Mudança de direção em conduítes internos sustentáveis.",
    cores_disponiveis: ["Cinza Eco"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Cinza Eco": "E004002"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Cinza Eco": "E004004"
        }
      }
    ],
    embalagem: {
      "1/2\"": 30,
      "3/4\"": 30
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC reciclado",
    imagem: "/images/linhas/linha-masster-eco/curva-longa-90.webp",
    pdf_ficha_tecnica: "/pdfs/curva-longa-90-eco.pdf"
  },
  {
    id: "E005",
    nome: "Eletroduto de PVC - Eco",
    slug: "eletroduto-pvc-eco",
    categoria: "Eletrodutos",
    linha: "Eco",
    descricao: "Eletroduto de PVC reciclado para instalações elétricas sustentáveis.",
    aplicacao: "Instalações elétricas de baixa tensão com foco em sustentabilidade.",
    cores_disponiveis: ["Cinza Eco"],
    bitolas: [
      {
        bitola: "1/2\" x 3m",
        codigo: {
          "Cinza Eco": "E005002"
        }
      },
      {
        bitola: "3/4\" x 3m",
        codigo: {
          "Cinza Eco": "E005004"
        }
      },
      {
        bitola: "1\" x 3m",
        codigo: {
          "Cinza Eco": "E005006"
        }
      }
    ],
    embalagem: {
      "1/2\" x 3m": 25,
      "3/4\" x 3m": 25,
      "1\" x 3m": 20
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC reciclado",
    imagem: "/images/linhas/linha-masster-eco/eletroduto-de-pvc.webp",
    pdf_ficha_tecnica: "/pdfs/eletroduto-pvc-eco.pdf"
  },
  {
    id: "E006",
    nome: "Luva com Divisória - Eco",
    slug: "luva-com-divisoria-eco",
    categoria: "Acessórios",
    linha: "Eco",
    descricao: "Luva com divisória em PVC reciclado para emenda de eletrodutos sustentáveis.",
    aplicacao: "Unir dois eletrodutos com divisória interna em instalações sustentáveis.",
    cores_disponiveis: ["Cinza Eco"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Cinza Eco": "E006002"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Cinza Eco": "E006004"
        }
      }
    ],
    embalagem: {
      "1/2\"": 50,
      "3/4\"": 50
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC reciclado",
    imagem: "/images/linhas/linha-masster-eco/luva-com-divisoria.webp",
    pdf_ficha_tecnica: "/pdfs/luva-com-divisoria-eco.pdf"
  },

  // LINHA MASSTER PLUS
  {
    id: "P001",
    nome: "Abraçadeira - Masster Plus",
    slug: "abracadeira-masster-plus",
    categoria: "Acessórios",
    linha: "Plus",
    descricao: "Abraçadeiras em PVC virgem para instalações elétricas aparentes abrigadas.",
    aplicacao: "Fixação de eletrodutos em instalações aparentes.",
    cores_disponiveis: ["Preto", "Cinza", "Branco Gelo", "Vermelho"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Preto": "P001002",
          "Cinza": "P001002G",
          "Branco Gelo": "P001002B",
          "Vermelho": "P001002V"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Preto": "P001004",
          "Cinza": "P001004G",
          "Branco Gelo": "P001004B",
          "Vermelho": "P001004V"
        }
      }
    ],
    embalagem: {
      "1/2\"": 50,
      "3/4\"": 50
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC virgem",
    imagem: "/images/linhas/linha-masster-plus/abracadeira.webp",
    pdf_ficha_tecnica: "/pdfs/abracadeira-masster-plus.pdf"
  },
  {
    id: "P002",
    nome: "Adaptador Liso 3/4\" - Masster Plus",
    slug: "adaptador-liso-3-4-masster-plus",
    categoria: "Acessórios",
    linha: "Plus",
    descricao: "Adaptador liso 3/4\" em PVC virgem para conexões diretas.",
    aplicacao: "Conexão direta entre eletrodutos de mesmo diâmetro.",
    cores_disponiveis: ["Preto", "Cinza", "Branco Gelo", "Vermelho"],
    bitolas: [
      {
        bitola: "3/4\"",
        codigo: {
          "Preto": "P002004",
          "Cinza": "P002004G",
          "Branco Gelo": "P002004B",
          "Vermelho": "P002004V"
        }
      }
    ],
    embalagem: {
      "3/4\"": 100
    },
    material: "PVC virgem",
    imagem: "/images/linhas/linha-masster-plus/adaptador-liso-3-4.webp",
    pdf_ficha_tecnica: "/pdfs/adaptador-liso-3-4-masster-plus.pdf"
  },
  {
    id: "P003",
    nome: "Adaptador Liso Roscável 1/2\" - Masster Plus",
    slug: "adaptador-liso-roscavel-1-2-masster-plus",
    categoria: "Acessórios",
    linha: "Plus",
    descricao: "Adaptador liso roscável 1/2\" em PVC virgem para conexões com peças metálicas.",
    aplicacao: "Conexão entre eletroduto e peças com rosca externa.",
    cores_disponiveis: ["Preto", "Cinza", "Branco Gelo", "Vermelho"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Preto": "P003002",
          "Cinza": "P003002G",
          "Branco Gelo": "P003002B",
          "Vermelho": "P003002V"
        }
      }
    ],
    embalagem: {
      "1/2\"": 100
    },
    material: "PVC virgem",
    imagem: "/images/linhas/linha-masster-plus/adaptador-liso-roscavel-1-2.webp",
    pdf_ficha_tecnica: "/pdfs/adaptador-liso-roscavel-1-2-masster-plus.pdf"
  },
  {
    id: "P004",
    nome: "Caixa 5 Entradas - Masster Plus",
    slug: "caixa-5-entradas-masster-plus",
    categoria: "Caixas e Conduletes",
    linha: "Plus",
    descricao: "Caixa com 5 entradas para instalações complexas em PVC virgem.",
    aplicacao: "Distribuição de condutores em múltiplas direções.",
    cores_disponiveis: ["Preto", "Cinza", "Branco Gelo", "Vermelho"],
    bitolas: [
      {
        bitola: "Padrão",
        codigo: {
          "Preto": "P004000",
          "Cinza": "P004000G",
          "Branco Gelo": "P004000B",
          "Vermelho": "P004000V"
        }
      }
    ],
    embalagem: {
      "Padrão": 15
    },
    material: "PVC virgem",
    imagem: "/images/linhas/linha-masster-plus/caixa-5-entradas.webp",
    pdf_ficha_tecnica: "/pdfs/caixa-5-entradas-masster-plus.pdf"
  },
  {
    id: "P005",
    nome: "Caixa 5 Entradas + Tampa Cega - Masster Plus",
    slug: "caixa-5-entradas-tampa-cega-masster-plus",
    categoria: "Caixas e Conduletes",
    linha: "Plus",
    descricao: "Caixa com 5 entradas e tampa cega em PVC virgem para instalações completas.",
    aplicacao: "Distribuição de condutores com fechamento quando necessário.",
    cores_disponiveis: ["Preto", "Cinza", "Branco Gelo", "Vermelho"],
    bitolas: [
      {
        bitola: "Conjunto",
        codigo: {
          "Preto": "P005000",
          "Cinza": "P005000G",
          "Branco Gelo": "P005000B",
          "Vermelho": "P005000V"
        }
      }
    ],
    embalagem: {
      "Conjunto": 10
    },
    material: "PVC virgem",
    imagem: "/images/linhas/linha-masster-plus/caixa-5-entradas+tampa-cega.webp",
    pdf_ficha_tecnica: "/pdfs/caixa-5-entradas-tampa-cega-masster-plus.pdf"
  },
  {
    id: "P006",
    nome: "Cotovelo com Inspeção - Masster Plus",
    slug: "cotovelo-com-inspecao-masster-plus",
    categoria: "Condução",
    linha: "Plus",
    descricao: "Cotovelo com janela de inspeção removível em PVC virgem.",
    aplicacao: "Mudança de direção com facilidade de manutenção e inspeção.",
    cores_disponiveis: ["Preto", "Cinza", "Branco Gelo", "Vermelho"],
    bitolas: [
      {
        bitola: "3/4\"",
        codigo: {
          "Preto": "P006004",
          "Cinza": "P006004G",
          "Branco Gelo": "P006004B",
          "Vermelho": "P006004V"
        }
      },
      {
        bitola: "1\"",
        codigo: {
          "Preto": "P006006",
          "Cinza": "P006006G",
          "Branco Gelo": "P006006B",
          "Vermelho": "P006006V"
        }
      }
    ],
    embalagem: {
      "3/4\"": 30,
      "1\"": 20
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC virgem",
    imagem: "/images/linhas/linha-masster-plus/cotovelo-com-inspecao.webp",
    pdf_ficha_tecnica: "/pdfs/cotovelo-com-inspecao-masster-plus.pdf"
  },
  {
    id: "P007",
    nome: "Curva 45° Ponta Lisa - Masster Plus",
    slug: "curva-45-ponta-lisa-masster-plus",
    categoria: "Condução",
    linha: "Plus",
    descricao: "Curva 45° ponta lisa em PVC virgem para mudanças de direção suaves.",
    aplicacao: "Mudança de direção suave em eletrodutos aparentes.",
    cores_disponiveis: ["Preto", "Cinza", "Branco Gelo", "Vermelho"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Preto": "P007002",
          "Cinza": "P007002G",
          "Branco Gelo": "P007002B",
          "Vermelho": "P007002V"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Preto": "P007004",
          "Cinza": "P007004G",
          "Branco Gelo": "P007004B",
          "Vermelho": "P007004V"
        }
      }
    ],
    embalagem: {
      "1/2\"": 30,
      "3/4\"": 30
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC virgem",
    imagem: "/images/linhas/linha-masster-plus/curva-45-ponta-lisa.webp",
    pdf_ficha_tecnica: "/pdfs/curva-45-ponta-lisa-masster-plus.pdf"
  },
  {
    id: "P008",
    nome: "Curva Longa 90° com Bolsa - Masster Plus",
    slug: "curva-longa-90-com-bolsa-masster-plus",
    categoria: "Condução",
    linha: "Plus",
    descricao: "Curva longa 90° com bolsa em PVC virgem para instalações aparentes.",
    aplicacao: "Mudança de direção em eletrodutos aparentes com acabamento superior.",
    cores_disponiveis: ["Preto", "Cinza", "Branco Gelo", "Vermelho"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Preto": "P008002",
          "Cinza": "P008002G",
          "Branco Gelo": "P008002B",
          "Vermelho": "P008002V"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Preto": "P008004",
          "Cinza": "P008004G",
          "Branco Gelo": "P008004B",
          "Vermelho": "P008004V"
        }
      }
    ],
    embalagem: {
      "1/2\"": 20,
      "3/4\"": 20
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC virgem",
    imagem: "/images/linhas/linha-masster-plus/curva-longa-90-com-bolsa.webp",
    pdf_ficha_tecnica: "/pdfs/curva-longa-90-com-bolsa-masster-plus.pdf"
  },
  {
    id: "P009",
    nome: "Curva Longa 90° Ponta Lisa - Masster Plus",
    slug: "curva-longa-90-ponta-lisa-masster-plus",
    categoria: "Condução",
    linha: "Plus",
    descricao: "Curva longa 90° ponta lisa em PVC virgem para instalações embutidas.",
    aplicacao: "Mudança de direção em conduítes internos com acabamento superior.",
    cores_disponiveis: ["Preto", "Cinza", "Branco Gelo", "Vermelho"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Preto": "P009002",
          "Cinza": "P009002G",
          "Branco Gelo": "P009002B",
          "Vermelho": "P009002V"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Preto": "P009004",
          "Cinza": "P009004G",
          "Branco Gelo": "P009004B",
          "Vermelho": "P009004V"
        }
      }
    ],
    embalagem: {
      "1/2\"": 30,
      "3/4\"": 30
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC virgem",
    imagem: "/images/linhas/linha-masster-plus/curva-longa-90-ponta-lisa.webp",
    pdf_ficha_tecnica: "/pdfs/curva-longa-90-ponta-lisa-masster-plus.pdf"
  },
  {
    id: "P010",
    nome: "Eletroduto PVC Ponta Lisa - Masster Plus",
    slug: "eletroduto-pvc-ponta-lisa-masster-plus",
    categoria: "Eletrodutos",
    linha: "Plus",
    descricao: "Eletroduto de PVC ponta lisa em PVC virgem para instalações elétricas.",
    aplicacao: "Instalações elétricas de baixa tensão com acabamento superior.",
    cores_disponiveis: ["Preto", "Cinza", "Branco Gelo", "Vermelho"],
    bitolas: [
      {
        bitola: "1/2\" x 3m",
        codigo: {
          "Preto": "P010002",
          "Cinza": "P010002G",
          "Branco Gelo": "P010002B",
          "Vermelho": "P010002V"
        }
      },
      {
        bitola: "3/4\" x 3m",
        codigo: {
          "Preto": "P010004",
          "Cinza": "P010004G",
          "Branco Gelo": "P010004B",
          "Vermelho": "P010004V"
        }
      },
      {
        bitola: "1\" x 3m",
        codigo: {
          "Preto": "P010006",
          "Cinza": "P010006G",
          "Branco Gelo": "P010006B",
          "Vermelho": "P010006V"
        }
      }
    ],
    embalagem: {
      "1/2\" x 3m": 25,
      "3/4\" x 3m": 25,
      "1\" x 3m": 20
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC virgem",
    imagem: "/images/linhas/linha-masster-plus/eletroduto-pvc-ponta-lisa.webp",
    pdf_ficha_tecnica: "/pdfs/eletroduto-pvc-ponta-lisa-masster-plus.pdf"
  },
  {
    id: "P011",
    nome: "Luva Lisa com Divisória - Masster Plus",
    slug: "luva-lisa-com-divisoria-masster-plus",
    categoria: "Acessórios",
    linha: "Plus",
    descricao: "Luva lisa com divisória em PVC virgem para emenda de eletrodutos.",
    aplicacao: "Unir dois eletrodutos com divisória interna para organização de condutores.",
    cores_disponiveis: ["Preto", "Cinza", "Branco Gelo", "Vermelho"],
    bitolas: [
      {
        bitola: "1/2\"",
        codigo: {
          "Preto": "P011002",
          "Cinza": "P011002G",
          "Branco Gelo": "P011002B",
          "Vermelho": "P011002V"
        }
      },
      {
        bitola: "3/4\"",
        codigo: {
          "Preto": "P011004",
          "Cinza": "P011004G",
          "Branco Gelo": "P011004B",
          "Vermelho": "P011004V"
        }
      },
      {
        bitola: "1\"",
        codigo: {
          "Preto": "P011006",
          "Cinza": "P011006G",
          "Branco Gelo": "P011006B",
          "Vermelho": "P011006V"
        }
      }
    ],
    embalagem: {
      "1/2\"": 50,
      "3/4\"": 50,
      "1\"": 30
    },
    norma: "ABNT NBR 15465:2020",
    material: "PVC virgem",
    imagem: "/images/linhas/linha-masster-plus/luva-lisa-com-divisoria.webp",
    pdf_ficha_tecnica: "/pdfs/luva-lisa-com-divisoria-masster-plus.pdf"
  }
];