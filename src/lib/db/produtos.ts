import type { Produto } from "@/lib/types";

export const produtos: Produto[] = [
  // LINHA CLASSE A
  {
    "id": "A001",
    "nome": "Eletroduto de PVC Ponta Lisa - Classe A",
    "slug": "eletroduto-pvc-ponta-lisa-classe-a",
    "categoria": "Eletrodutos",
    "linha": "Classe A",
    "descricao": "Eletroduto de PVC com ponta lisa para condução elétrica em ambientes industriais e aplicações de engenharia pesada.",
    "aplicacao": "Indicado para instalações elétricas aparentes ou embutidas com alta resistência mecânica.",
    "cores_disponiveis": ["Cinza Munsell"],
    "bitolas": [
      { "bitola": "3/4\"", "codigo": { "Cinza Munsell": "15201304" } },
      { "bitola": "1\"", "codigo": { "Cinza Munsell": "15201306" } },
      { "bitola": "1.1/2\"", "codigo": { "Cinza Munsell": "15201310" } },
      { "bitola": "2\"", "codigo": { "Cinza Munsell": "15201312" } }
    ],
    "embalagem": {
      "3/4\"": 10,
      "1\"": 10,
      "1.1/2\"": 5,
      "2\"": 5
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC Classe A",
    "imagem": "/images/linhas/linha-classe-a/eletroduto-de-pvc-ponta-lisa.webp",
    "pdf_ficha_tecnica": "/pdfs/eletroduto-pvc-ponta-lisa-classe-a.pdf"
  },
  {
    "id": "A002",
    "nome": "Eletroduto de PVC Roscável - Classe A",
    "slug": "eletroduto-pvc-roscavel-classe-a",
    "categoria": "Eletrodutos",
    "linha": "Classe A",
    "descricao": "Eletroduto em PVC roscável de alta resistência para instalações elétricas em projetos industriais.",
    "aplicacao": "Utilizado em sistemas de condução elétrica com conexões roscáveis.",
    "cores_disponiveis": ["Cinza Munsell"],
    "bitolas": [
      { "bitola": "3/4\"", "codigo": { "Cinza Munsell": "15202304" } },
      { "bitola": "1\"", "codigo": { "Cinza Munsell": "15202306" } },
      { "bitola": "1.1/2\"", "codigo": { "Cinza Munsell": "15202310" } },
      { "bitola": "2\"", "codigo": { "Cinza Munsell": "15202312" } },
      { "bitola": "2.1/2\"", "codigo": { "Cinza Munsell": "15202314" } },
      { "bitola": "3\"", "codigo": { "Cinza Munsell": "15202316" } },
      { "bitola": "4\"", "codigo": { "Cinza Munsell": "15202318" } }
    ],
    "embalagem": {
      "3/4\"": 10,
      "1\"": 10,
      "1.1/2\"": 5,
      "2\"": 5,
      "2.1/2\"": 3,
      "3\"": 2,
      "4\"": 2
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC Classe A",
    "imagem": "/images/linhas/linha-classe-a/eletroduto-de-pvc-roscavel.webp",
    "pdf_ficha_tecnica": "/pdfs/eletroduto-pvc-roscavel-classe-a.pdf"
  },
  {
    "id": "A003",
    "nome": "Curva Longa 90° Roscável - Classe A",
    "slug": "curva-longa-90-roscavel-classe-a",
    "categoria": "Eletrodutos",
    "linha": "Classe A",
    "descricao": "Curva longa roscável em PVC Classe A, garantindo melhor direcionamento em tubulações elétricas industriais.",
    "aplicacao": "Mudança de direção em sistemas com eletrodutos roscáveis.",
    "cores_disponiveis": ["Cinza Munsell"],
    "bitolas": [
      { "bitola": "3/4\"", "codigo": { "Cinza Munsell": "35052004" } },
      { "bitola": "1\"", "codigo": { "Cinza Munsell": "35052006" } },
      { "bitola": "1.1/2\"", "codigo": { "Cinza Munsell": "35052010" } },
      { "bitola": "2\"", "codigo": { "Cinza Munsell": "35052012" } },
      { "bitola": "2.1/2\"", "codigo": { "Cinza Munsell": "35052014" } },
      { "bitola": "3\"", "codigo": { "Cinza Munsell": "35052016" } },
      { "bitola": "4\"", "codigo": { "Cinza Munsell": "35052018" } }
    ],
    "embalagem": {
      "3/4\"": 20,
      "1\"": 20,
      "1.1/2\"": 1,
      "2\"": 1,
      "2.1/2\"": 1,
      "3\"": 1,
      "4\"": 1
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC Classe A",
    "imagem": "/images/linhas/linha-classe-a/curva-longa-90-roscavel.webp",
    "pdf_ficha_tecnica": "/pdfs/curva-longa-90-roscavel-classe-a.pdf"
  },
  {
    "id": "A004",
    "nome": "Curva Longa 90° com Bolsa - Classe A",
    "slug": "curva-longa-90-bolsa-classe-a",
    "categoria": "Eletrodutos",
    "linha": "Classe A",
    "descricao": "Curva longa com bolsa para condução elétrica de alta performance em obras industriais.",
    "aplicacao": "Permite mudança de direção sem rosca, com encaixe por bolsa.",
    "cores_disponiveis": ["Cinza Munsell"],
    "bitolas": [
      { "bitola": "3/4\"", "codigo": { "Cinza Munsell": "35056004" } },
      { "bitola": "1\"", "codigo": { "Cinza Munsell": "35056006" } },
      { "bitola": "1.1/2\"", "codigo": { "Cinza Munsell": "35056010" } },
      { "bitola": "2\"", "codigo": { "Cinza Munsell": "35056012" } }
    ],
    "embalagem": {
      "3/4\"": 20,
      "1\"": 20,
      "1.1/2\"": 1,
      "2\"": 1
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC Classe A",
    "imagem": "/images/linhas/linha-classe-a/curva-longa-90-com-bolsa.webp",
    "pdf_ficha_tecnica": "/pdfs/curva-longa-90-com-bolsa-classe-a.pdf"
  },
  {
    "id": "A005",
    "nome": "Luva Roscável com Divisória - Classe A",
    "slug": "luva-roscavel-divisoria-classe-a",
    "categoria": "Acessórios",
    "linha": "Classe A",
    "descricao": "Luva em PVC roscável com divisória para conexão entre eletrodutos em instalações industriais.",
    "aplicacao": "Utilizada para união segura de conduítes roscáveis com compartimento interno.",
    "cores_disponiveis": ["Cinza Munsell"],
    "bitolas": [
      { "bitola": "3/4\"", "codigo": { "Cinza Munsell": "25052004" } },
      { "bitola": "1\"", "codigo": { "Cinza Munsell": "25052006" } },
      { "bitola": "1.1/2\"", "codigo": { "Cinza Munsell": "25052010" } },
      { "bitola": "2\"", "codigo": { "Cinza Munsell": "25052012" } },
      { "bitola": "2.1/2\"", "codigo": { "Cinza Munsell": "25052014" } },
      { "bitola": "3\"", "codigo": { "Cinza Munsell": "25052016" } },
      { "bitola": "4\"", "codigo": { "Cinza Munsell": "25052018" } }
    ],
    "embalagem": {
      "3/4\"": 50,
      "1\"": 50,
      "1.1/2\"": 20,
      "2\"": 15,
      "2.1/2\"": 5,
      "3\"": 2,
      "4\"": 1
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC Classe A",
    "imagem": "/images/linhas/linha-classe-a/luva-roscavel-com-divisoria.webp",
    "pdf_ficha_tecnica": "/pdfs/luva-roscavel-divisoria-classe-a.pdf"
  },
  {
    "id": "A006",
    "nome": "Luva Lisa com Divisória - Classe A",
    "slug": "luva-lisa-divisoria-classe-a",
    "categoria": "Acessórios",
    "linha": "Classe A",
    "descricao": "Luva lisa em PVC com divisória para conexão de eletrodutos em instalações industriais de alta resistência.",
    "aplicacao": "Indicada para união de eletrodutos classe A sem rosca, garantindo vedação segura e praticidade em condução elétrica.",
    "cores_disponiveis": ["Cinza Munsell"],
    "bitolas": [
      { "bitola": "3/4\"", "codigo": { "Cinza Munsell": "25051004" } },
      { "bitola": "1\"", "codigo": { "Cinza Munsell": "25051006" } },
      { "bitola": "1.1/2\"", "codigo": { "Cinza Munsell": "25051010" } },
      { "bitola": "2\"", "codigo": { "Cinza Munsell": "25051012" } }
    ],
    "embalagem": {
      "3/4\"": 50,
      "1\"": 20,
      "1.1/2\"": 15,
      "2\"": 15
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC Classe A",
    "imagem": "/images/linhas/linha-classe-a/luva-lisa-com-divisoria.webp",
    "pdf_ficha_tecnica": "/pdfs/luva-lisa-divisoria-classe-a.pdf"
  },
  {
    "id": "A007",
    "nome": "Curva Longa 90° Lisa - Classe A",
    "slug": "curva-longa-90-lisa-classe-a",
    "categoria": "Eletrodutos",
    "linha": "Classe A",
    "descricao": "Curva longa lisa em PVC Classe A, utilizada para mudança suave de direção em instalações elétricas industriais.",
    "aplicacao": "Indicado para sistemas de eletrodutos lisos onde é necessária robustez e facilidade de instalação.",
    "cores_disponiveis": ["Cinza Munsell"],
    "bitolas": [
      { "bitola": "3/4\"", "codigo": { "Cinza Munsell": "35051004" } },
      { "bitola": "1\"", "codigo": { "Cinza Munsell": "35051006" } },
      { "bitola": "1.1/2\"", "codigo": { "Cinza Munsell": "35051010" } },
      { "bitola": "2\"", "codigo": { "Cinza Munsell": "35051012" } }
    ],
    "embalagem": {
      "3/4\"": 20,
      "1\"": 20,
      "1.1/2\"": 1,
      "2\"": 1
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC Classe A",
    "imagem": "/images/linhas/linha-classe-a/curva-longa-90-lisa.webp",
    "pdf_ficha_tecnica": "/pdfs/curva-longa-90-lisa-classe-a.pdf"
  },

  // LINHA MASSTER ECO
  {
    "id": "E001",
    "nome": "Eletroduto de PVC Roscável - Eco",
    "slug": "eletroduto-pvc-roscavel-eco",
    "categoria": "Eletrodutos",
    "linha": "Masster Eco",
    "descricao": "Eletroduto roscável em PVC reciclado para instalações elétricas sustentáveis com alta resistência mecânica.",
    "aplicacao": "Utilizado em sistemas elétricos onde conexões roscáveis são necessárias.",
    "cores_disponiveis": ["Cinza Eco"],
    "bitolas": [
      { "bitola": "1/2\"", "codigo": { "Cinza Eco": "14202302" } },
      { "bitola": "3/4\"", "codigo": { "Cinza Eco": "14202304" } },
      { "bitola": "1\"", "codigo": { "Cinza Eco": "14202306" } },
      { "bitola": "1.1/4\"", "codigo": { "Cinza Eco": "14202308" } },
      { "bitola": "1.1/2\"", "codigo": { "Cinza Eco": "14202310" } },
      { "bitola": "2\"", "codigo": { "Cinza Eco": "14202312" } },
      { "bitola": "2.1/2\"", "codigo": { "Cinza Eco": "14202314" } },
      { "bitola": "3\"", "codigo": { "Cinza Eco": "14202316" } },
      { "bitola": "4\"", "codigo": { "Cinza Eco": "14202318" } }
    ],
    "embalagem": {
      "1/2\"": 10,
      "3/4\"": 10,
      "1\"": 10,
      "1.1/4\"": 5,
      "1.1/2\"": 5,
      "2\"": 5,
      "2.1/2\"": 5,
      "3\"": 5,
      "4\"": 3
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC reciclado",
    "imagem": "/images/linhas/linha-masster-eco/eletroduto-de-pvc.webp",
    "pdf_ficha_tecnica": "/pdfs/eletroduto-roscavel-eco.pdf"
  },
  {
    "id": "E002",
    "nome": "Eletroduto de PVC Ponta Lisa - Eco",
    "slug": "eletroduto-pvc-ponta-lisa-eco",
    "categoria": "Eletrodutos",
    "linha": "Masster Eco",
    "descricao": "Eletroduto ponta lisa produzido em PVC reciclado, indicado para infraestrutura elétrica sustentável.",
    "aplicacao": "Utilizado em sistemas elétricos com conexões por encaixe.",
    "cores_disponiveis": ["Cinza Eco"],
    "bitolas": [
      { "bitola": "1/2\"", "codigo": { "Cinza Eco": "14207302" } },
      { "bitola": "3/4\"", "codigo": { "Cinza Eco": "14207304" } },
      { "bitola": "1\"", "codigo": { "Cinza Eco": "14207306" } },
      { "bitola": "1.1/4\"", "codigo": { "Cinza Eco": "14207308" } },
      { "bitola": "1.1/2\"", "codigo": { "Cinza Eco": "14207310" } },
      { "bitola": "2\"", "codigo": { "Cinza Eco": "14207312" } },
      { "bitola": "2.1/2\"", "codigo": { "Cinza Eco": "14207314" } },
      { "bitola": "3\"", "codigo": { "Cinza Eco": "14207316" } },
      { "bitola": "4\"", "codigo": { "Cinza Eco": "14207318" } }
    ],
    "embalagem": {
      "1/2\"": 10,
      "3/4\"": 10,
      "1\"": 10,
      "1.1/4\"": 5,
      "1.1/2\"": 5,
      "2\"": 5,
      "2.1/2\"": 5,
      "3\"": 5,
      "4\"": 3
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC reciclado",
    "imagem": "/images/linhas/linha-masster-eco/eletroduto-de-pvc.webp",
    "pdf_ficha_tecnica": "/pdfs/eletroduto-ponta-lisa-eco.pdf"
  },
  {
    "id": "E003",
    "nome": "Luva Roscável com Divisória - Eco",
    "slug": "luva-roscavel-divisoria-eco",
    "categoria": "Acessórios",
    "linha": "Masster Eco",
    "descricao": "Luva roscável com divisória fabricada em PVC reciclado para instalações elétricas sustentáveis.",
    "aplicacao": "Utilizada para união segura de eletrodutos roscáveis.",
    "cores_disponiveis": ["Cinza Eco"],
    "bitolas": [
      { "bitola": "1/2\"", "codigo": { "Cinza Eco": "24052002" } },
      { "bitola": "3/4\"", "codigo": { "Cinza Eco": "24052004" } },
      { "bitola": "1\"", "codigo": { "Cinza Eco": "24052006" } },
      { "bitola": "1.1/4\"", "codigo": { "Cinza Eco": "24052008" } },
      { "bitola": "1.1/2\"", "codigo": { "Cinza Eco": "24052010" } },
      { "bitola": "2\"", "codigo": { "Cinza Eco": "24052012" } },
      { "bitola": "2.1/2\"", "codigo": { "Cinza Eco": "24052014" } },
      { "bitola": "3\"", "codigo": { "Cinza Eco": "24052016" } },
      { "bitola": "4\"", "codigo": { "Cinza Eco": "24052018" } }
    ],
    "embalagem": {
      "1/2\"": 50,
      "3/4\"": 50,
      "1\"": 50,
      "1.1/4\"": 20,
      "1.1/2\"": 15,
      "2\"": 15,
      "2.1/2\"": 10,
      "3\"": 5,
      "4\"": 1
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC reciclado",
    "imagem": "/images/linhas/linha-masster-eco/luva-com-divisoria.webp",
    "pdf_ficha_tecnica": "/pdfs/luva-roscavel-divisoria-eco.pdf"
  },
  {
    "id": "E004",
    "nome": "Curva Longa 180° Roscável - Eco",
    "slug": "curva-longa-180-roscavel-eco",
    "categoria": "Eletrodutos",
    "linha": "Masster Eco",
    "descricao": "Curva longa 180° roscável produzida em PVC reciclado para condução sustentável de eletrodutos.",
    "aplicacao": "Utilizada em mudanças completas de direção em eletrodutos com rosca.",
    "cores_disponiveis": ["Cinza Eco"],
    "bitolas": [
      { "bitola": "1/2\"", "codigo": { "Cinza Eco": "34102002" } },
      { "bitola": "3/4\"", "codigo": { "Cinza Eco": "34102004" } },
      { "bitola": "1\"", "codigo": { "Cinza Eco": "34102006" } },
      { "bitola": "1.1/4\"", "codigo": { "Cinza Eco": "34102008" } },
      { "bitola": "1.1/2\"", "codigo": { "Cinza Eco": "34102010" } },
      { "bitola": "2\"", "codigo": { "Cinza Eco": "34102012" } }
    ],
    "embalagem": {
      "1/2\"": 1,
      "3/4\"": 1,
      "1\"": 1,
      "1.1/4\"": 1,
      "1.1/2\"": 1,
      "2\"": 1
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC reciclado",
    "imagem": "/images/linhas/linha-masster-eco/curva-longa-180-roscavel.webp",
    "pdf_ficha_tecnica": "/pdfs/curva-longa-180-roscavel-eco.pdf"
  },
  {
    "id": "E005",
    "nome": "Curva Longa 45° - Eco",
    "slug": "curva-longa-45-eco",
    "categoria": "Eletrodutos",
    "linha": "Masster Eco",
    "descricao": "Curva longa 45° fabricada em PVC reciclado, disponível em versões roscável e ponta lisa, destinada a instalações sustentáveis.",
    "aplicacao": "Indicada para mudanças suaves de direção em eletrodutos, reduzindo perda de passagem e tensão estrutural.",
    "cores_disponiveis": ["Cinza Eco"],
    "bitolas": [
      { "bitola": "1/2\"", "codigo": { "Roscável": "34062002", "Ponta Lisa": "34067002" } },
      { "bitola": "3/4\"", "codigo": { "Roscável": "34062004", "Ponta Lisa": "34067004" } },
      { "bitola": "1\"", "codigo": { "Roscável": "34062006", "Ponta Lisa": "34067006" } }
    ],
    "embalagem": {
      "1/2\"": 20,
      "3/4\"": 20,
      "1\"": 20
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC reciclado",
    "imagem": "/images/linhas/linha-masster-eco/curva-longa-45.webp",
    "pdf_ficha_tecnica": "/pdfs/curva-longa-45-eco.pdf"
  },
  {
    "id": "E006",
    "nome": "Curva Longa 90° - Eco",
    "slug": "curva-longa-90-eco",
    "categoria": "Eletrodutos",
    "linha": "Masster Eco",
    "descricao": "Curva longa 90° em PVC reciclado, disponível nas versões roscável e ponta lisa para condução elétrica sustentável.",
    "aplicacao": "Utilizada em sistemas de eletrodutos onde há necessidade de mudança de direção angular com baixo esforço de passagem.",
    "cores_disponiveis": ["Cinza Eco"],
    "bitolas": [
      { "bitola": "1/2\"", "codigo": { "Roscável": "34052002", "Ponta Lisa": "34057002" } },
      { "bitola": "3/4\"", "codigo": { "Roscável": "34052004", "Ponta Lisa": "34057004" } },
      { "bitola": "1\"", "codigo": { "Roscável": "34052006", "Ponta Lisa": "34057006" } },
      { "bitola": "1.1/4\"", "codigo": { "Roscável": "34052008", "Ponta Lisa": "34057008" } },
      { "bitola": "1.1/2\"", "codigo": { "Roscável": "34052010", "Ponta Lisa": "34057010" } },
      { "bitola": "2\"", "codigo": { "Roscável": "34052012", "Ponta Lisa": "34057012" } },
      { "bitola": "2.1/2\"", "codigo": { "Roscável": "34052014" } },
      { "bitola": "3\"", "codigo": { "Roscável": "34052016" } },
      { "bitola": "4\"", "codigo": { "Roscável": "34052018" } }
    ],
    "embalagem": {
      "1/2\"": 20,
      "3/4\"": 20,
      "1\"": 20,
      "1.1/4\"": 1,
      "1.1/2\"": 1,
      "2\"": 1,
      "2.1/2\"": 1,
      "3\"": 1,
      "4\"": 1
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC reciclado",
    "imagem": "/images/linhas/linha-masster-eco/curva-longa-90.webp",
    "pdf_ficha_tecnica": "/pdfs/curva-longa-90-eco.pdf"
  },
  {
    "id": "E007",
    "nome": "Curva Longa 90° com Bolsa - Eco",
    "slug": "curva-longa-90-bolsa-eco",
    "categoria": "Eletrodutos",
    "linha": "Masster Eco",
    "descricao": "Curva longa com bolsa produzida em PVC reciclado, ideal para condução elétrica sustentável com encaixe rápido.",
    "aplicacao": "Utilizada em sistemas de eletrodutos com uniões por encaixe tipo bolsa.",
    "cores_disponiveis": ["Cinza Eco"],
    "bitolas": [
      { "bitola": "1/2\"", "codigo": { "Cinza Eco": "34055002" } },
      { "bitola": "3/4\"", "codigo": { "Cinza Eco": "34055004" } },
      { "bitola": "1\"", "codigo": { "Cinza Eco": "34055006" } },
      { "bitola": "1.1/4\"", "codigo": { "Cinza Eco": "34055008" } },
      { "bitola": "1.1/2\"", "codigo": { "Cinza Eco": "34055010" } },
      { "bitola": "2\"", "codigo": { "Cinza Eco": "34055012" } }
    ],
    "embalagem": {
      "1/2\"": 20,
      "3/4\"": 20,
      "1\"": 20,
      "1.1/4\"": 1,
      "1.1/2\"": 1,
      "2\"": 1
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC reciclado",
    "imagem": "/images/linhas/linha-masster-eco/curva-longa-90-com-bolsa.webp",
    "pdf_ficha_tecnica": "/pdfs/curva-longa-90-com-bolsa-eco.pdf"
  },  

  // LINHA MASSTER PLUS
  {
    "id": "P001",
    "nome": "Abraçadeira - Masster Plus",
    "slug": "abracadeira-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Abraçadeiras em PVC virgem para instalações elétricas aparentes abrigadas.",
    "aplicacao": "Fixação de eletrodutos em instalações aparentes.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "bitolas": [
      {
        "bitola": "1/2\"",
        "codigo": {
          "Preto": "44053002",
          "Cinza": "46023002",
          "Cinza Claro": "77153002",
          "Branco Gelo": "47053002",
          "Vermelho": "48053002"
        }
      },
      {
        "bitola": "3/4\"",
        "codigo": {
          "Preto": "44053004",
          "Cinza": "46023004",
          "Cinza Claro": "77153004",
          "Branco Gelo": "47053004",
          "Vermelho": "48053004"
        }
      },
      {
        "bitola": "1\"",
        "codigo": {
          "Preto": "44053006",
          "Cinza": "46023006",
          "Cinza Claro": "77153006",
          "Branco Gelo": "47053006",
          "Vermelho": "48053006"
        }
      },
      {
        "bitola": "1.1/4\"",
        "codigo": {
          "Preto": "44053008",
          "Cinza": "46023008",
          "Cinza Claro": "77153008",
          "Branco Gelo": "47053008",
          "Vermelho": "48053008"
        }
      },
      {
        "bitola": "1.1/2\"",
        "codigo": {
          "Preto": "44053010",
          "Cinza": "46023010",
          "Cinza Claro": "77153010",
          "Branco Gelo": "47053010",
          "Vermelho": "48053010"
        }
      },
      {
        "bitola": "2\"",
        "codigo": {
          "Preto": "44053012",
          "Cinza": "46023012",
          "Cinza Claro": "77153012",
          "Branco Gelo": "47053012",
          "Vermelho": "48053012"
        }
      }
    ],
    "embalagem": {
      "1/2\"": 50,
      "3/4\"": 50,
      "1\"": 20,
      "1.1/4\"": 20,
      "1.1/2\"": 15,
      "2\"": 15
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/abracadeira.webp",
    "pdf_ficha_tecnica": "/pdfs/abracadeira-masster-plus.pdf"
  },
  {
    "id": "P002",
    "nome": "Eletroduto Linha Leve - Masster Plus",
    "slug": "eletroduto-linha-leve-masster-plus",
    "categoria": "Eletrodutos",
    "linha": "Masster Plus",
    "descricao": "Eletroduto leve em PVC virgem indicado para instalações elétricas aparentes prediais.",
    "aplicacao": "Utilizado em instalações elétricas aparentes abrigadas com baixa exigência mecânica.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "bitolas": [
      {
        "bitola": "1/2\"",
        "codigo": {
          "Preto": "14211302",
          "Cinza": "16211302",
          "Cinza Claro": "77007302",
          "Branco Gelo": "17211302",
          "Vermelho": "18211302"
        }
      },
      {
        "bitola": "3/4\"",
        "codigo": {
          "Preto": "14211304",
          "Cinza": "16211304",
          "Cinza Claro": "77007304",
          "Branco Gelo": "17211304",
          "Vermelho": "18211304"
        }
      },
      {
        "bitola": "1\"",
        "codigo": {
          "Preto": "14211306",
          "Cinza": "16211306",
          "Cinza Claro": "77007306",
          "Branco Gelo": "17211306",
          "Vermelho": "18211306"
        }
      }
    ],
    "embalagem": {
      "1/2\"": 10,
      "3/4\"": 10,
      "1\"": 10
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/eletroduto-pvc-ponta-lisa.webp",
    "pdf_ficha_tecnica": "/pdfs/eletroduto-linha-leve-masster-plus.pdf"
  },
  {
    "id": "P003",
    "nome": "Eletroduto de PVC Ponta Lisa Classe B - Masster Plus",
    "slug": "eletroduto-pvc-ponta-lisa-classe-b-masster-plus",
    "categoria": "Eletrodutos",
    "linha": "Masster Plus",
    "descricao": "Eletroduto ponta lisa Classe B fabricado em PVC virgem para instalações elétricas aparentes prediais.",
    "aplicacao": "Indicado para condução elétrica em projetos residenciais e prediais aparentes.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "bitolas": [
      {
        "bitola": "1/2\"",
        "codigo": {
          "Preto": "14201302",
          "Cinza": "16201302",
          "Cinza Claro": "77057302",
          "Branco Gelo": "17201302",
          "Vermelho": "18201302"
        }
      },
      {
        "bitola": "3/4\"",
        "codigo": {
          "Preto": "14201304",
          "Cinza": "16201304",
          "Cinza Claro": "77057304",
          "Branco Gelo": "17201304",
          "Vermelho": "18201304"
        }
      },
      {
        "bitola": "1\"",
        "codigo": {
          "Preto": "14201306",
          "Cinza": "16201306",
          "Cinza Claro": "77057306",
          "Branco Gelo": "17201306",
          "Vermelho": "18201306"
        }
      },
      {
        "bitola": "1.1/4\"",
        "codigo": {
          "Preto": "14201308",
          "Cinza": "16201308",
          "Cinza Claro": "77057308",
          "Branco Gelo": "17201308",
          "Vermelho": "18201308"
        }
      },
      {
        "bitola": "1.1/2\"",
        "codigo": {
          "Preto": "14201310",
          "Cinza": "16201310",
          "Cinza Claro": "77057310",
          "Branco Gelo": "17201310",
          "Vermelho": "18201310"
        }
      },
      {
        "bitola": "2\"",
        "codigo": {
          "Preto": "14201312",
          "Cinza": "16201312",
          "Cinza Claro": "77057312",
          "Branco Gelo": "17201312",
          "Vermelho": "18201312"
        }
      }
    ],
    "embalagem": {
      "1/2\"": 10,
      "3/4\"": 10,
      "1\"": 10,
      "1.1/4\"": 5,
      "1.1/2\"": 5,
      "2\"": 5
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/eletroduto-pvc-ponta-lisa.webp",
    "pdf_ficha_tecnica": "/pdfs/eletroduto-ponta-lisa-classe-b-masster-plus.pdf"
  },
  {
    "id": "P004",
    "nome": "Luva Lisa com Divisória - Masster Plus",
    "slug": "luva-lisa-divisoria-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Luva lisa com divisória em PVC virgem para conexões em eletrodutos aparentes prediais.",
    "aplicacao": "Utilizada para união de eletrodutos ponta lisa em instalações elétricas aparentes abrigadas.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "bitolas": [
      {
        "bitola": "1/2\"",
        "codigo": {
          "Preto": "24051002",
          "Cinza": "26051002",
          "Cinza Claro": "77105002",
          "Branco Gelo": "27051002",
          "Vermelho": "28051002"
        }
      },
      {
        "bitola": "3/4\"",
        "codigo": {
          "Preto": "24051004",
          "Cinza": "26051004",
          "Cinza Claro": "77105004",
          "Branco Gelo": "27051004",
          "Vermelho": "28051004"
        }
      },
      {
        "bitola": "1\"",
        "codigo": {
          "Preto": "24051006",
          "Cinza": "26051006",
          "Cinza Claro": "77105006",
          "Branco Gelo": "27051006",
          "Vermelho": "28051006"
        }
      },
      {
        "bitola": "1.1/4\"",
        "codigo": {
          "Preto": "24051008",
          "Cinza": "26051008",
          "Cinza Claro": "77105008",
          "Branco Gelo": "27051008",
          "Vermelho": "28051008"
        }
      },
      {
        "bitola": "1.1/2\"",
        "codigo": {
          "Preto": "24051010",
          "Cinza": "26051010",
          "Cinza Claro": "77105010",
          "Branco Gelo": "27051010",
          "Vermelho": "28051010"
        }
      },
      {
        "bitola": "2\"",
        "codigo": {
          "Preto": "24051012",
          "Cinza": "26051012",
          "Cinza Claro": "77105012",
          "Branco Gelo": "27051012",
          "Vermelho": "28051012"
        }
      }
    ],
    "embalagem": {
      "1/2\"": 50,
      "3/4\"": 50,
      "1\"": 20,
      "1.1/4\"": 20,
      "1.1/2\"": 15,
      "2\"": 15
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/luva-lisa-com-divisoria.webp",
    "pdf_ficha_tecnica": "/pdfs/luva-lisa-divisoria-masster-plus.pdf"
  },
  {
    "id": "P005",
    "nome": "Curva Longa 90° Ponta Lisa - Masster Plus",
    "slug": "curva-longa-90-ponta-lisa-masster-plus",
    "categoria": "Eletrodutos",
    "linha": "Masster Plus",
    "descricao": "Curva longa 90° ponta lisa fabricada em PVC virgem para instalações elétricas aparentes.",
    "aplicacao": "Indicada para mudanças de direção em sistemas elétricos com eletrodutos ponta lisa.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "bitolas": [
      {
        "bitola": "1/2\"",
        "codigo": {
          "Preto": "34051002",
          "Cinza": "36051002",
          "Cinza Claro": "77707002",
          "Branco Gelo": "37051002",
          "Vermelho": "38051002"
        }
      },
      {
        "bitola": "3/4\"",
        "codigo": {
          "Preto": "34051004",
          "Cinza": "36051004",
          "Cinza Claro": "77707004",
          "Branco Gelo": "37051004",
          "Vermelho": "38051004"
        }
      },
      {
        "bitola": "1\"",
        "codigo": {
          "Preto": "34051006",
          "Cinza": "36051006",
          "Cinza Claro": "77707006",
          "Branco Gelo": "37051006",
          "Vermelho": "38051006"
        }
      },
      {
        "bitola": "1.1/4\"",
        "codigo": {
          "Preto": "34051008",
          "Cinza": "36051008",
          "Cinza Claro": "77707008",
          "Branco Gelo": "37051008",
          "Vermelho": "38051008"
        }
      },
      {
        "bitola": "1.1/2\"",
        "codigo": {
          "Preto": "34051010",
          "Cinza": "36051010",
          "Cinza Claro": "77707010",
          "Branco Gelo": "37051010",
          "Vermelho": "38051010"
        }
      },
      {
        "bitola": "2\"",
        "codigo": {
          "Preto": "34051012",
          "Cinza": "36051012",
          "Cinza Claro": "77707012",
          "Branco Gelo": "37051012",
          "Vermelho": "38051012"
        }
      }
    ],
    "embalagem": {
      "1/2\"": 20,
      "3/4\"": 20,
      "1\"": 20,
      "1.1/4\"": 10,
      "1.1/2\"": 10,
      "2\"": 10
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/curva-longa-90-ponta-lisa.webp",
    "pdf_ficha_tecnica": "/pdfs/curva-longa-90-ponta-lisa-masster-plus.pdf"
  },
  {
    "id": "P006",
    "nome": "Curva Longa 90° com Bolsa - Masster Plus",
    "slug": "curva-longa-90-bolsa-masster-plus",
    "categoria": "Eletrodutos",
    "linha": "Masster Plus",
    "descricao": "Curva longa 90° com bolsa em PVC virgem para instalações elétricas aparentes prediais.",
    "aplicacao": "Utilizada para união por encaixe (bolsa) em mudanças de direção da tubulação elétrica.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "bitolas": [
      {
        "bitola": "1/2\"",
        "codigo": {
          "Preto": "34056002",
          "Cinza": "36056002",
          "Cinza Claro": "77656002",
          "Branco Gelo": "37056002",
          "Vermelho": "38056002"
        }
      },
      {
        "bitola": "3/4\"",
        "codigo": {
          "Preto": "34056004",
          "Cinza": "36056004",
          "Cinza Claro": "77656004",
          "Branco Gelo": "37056004",
          "Vermelho": "38056004"
        }
      },
      {
        "bitola": "1\"",
        "codigo": {
          "Preto": "34056006",
          "Cinza": "36056006",
          "Cinza Claro": "77656006",
          "Branco Gelo": "37056006",
          "Vermelho": "38056006"
        }
      },
      {
        "bitola": "1.1/4\"",
        "codigo": {
          "Preto": "34056008",
          "Cinza": "36056008",
          "Cinza Claro": "77656008",
          "Branco Gelo": "37056008",
          "Vermelho": "38056008"
        }
      },
      {
        "bitola": "1.1/2\"",
        "codigo": {
          "Preto": "34056010",
          "Cinza": "36056010",
          "Cinza Claro": "77656010",
          "Branco Gelo": "37056010",
          "Vermelho": "38056010"
        }
      },
      {
        "bitola": "2\"",
        "codigo": {
          "Preto": "34056012",
          "Cinza": "36056012",
          "Cinza Claro": "77656012",
          "Branco Gelo": "37056012",
          "Vermelho": "38056012"
        }
      }
    ],
    "embalagem": {
      "1/2\"": 20,
      "3/4\"": 20,
      "1\"": 20,
      "1.1/4\"": 10,
      "1.1/2\"": 10,
      "2\"": 10
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/curva-longa-90-com-bolsa.webp",
    "pdf_ficha_tecnica": "/pdfs/curva-longa-90-com-bolsa-masster-plus.pdf"
  },
  {
    "id": "P007",
    "nome": "Cotovelo com Inspeção - Masster Plus",
    "slug": "cotovelo-inspecao-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Cotovelo com inspeção em PVC virgem para instalações aparentes com acesso fácil para manutenção.",
    "aplicacao": "Facilita o acesso ao sistema elétrico em curvas onde pode haver necessidade de inspeção ou passagem de cabos.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "bitolas": [
      {
        "bitola": "1/2\"",
        "codigo": {
          "Preto": "24061002",
          "Cinza": "26061002",
          "Cinza Claro": "77205002",
          "Branco Gelo": "27061002",
          "Vermelho": "28061002"
        }
      },
      {
        "bitola": "3/4\"",
        "codigo": {
          "Preto": "24061004",
          "Cinza": "26061004",
          "Cinza Claro": "77205004",
          "Branco Gelo": "27061004",
          "Vermelho": "28061004"
        }
      },
      {
        "bitola": "1\"",
        "codigo": {
          "Preto": "24061006",
          "Cinza": "26061006",
          "Cinza Claro": "77205006",
          "Branco Gelo": "27061006",
          "Vermelho": "28061006"
        }
      }
    ],
    "embalagem": {
      "1/2\"": 20,
      "3/4\"": 20,
      "1\"": 20
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/cotovelo-com-inspecao.webp",
    "pdf_ficha_tecnica": "/pdfs/cotovelo-inspecao-masster-plus.pdf"
  },
  {
    "id": "P008",
    "nome": "Curva Longa 45° Ponta Lisa - Masster Plus",
    "slug": "curva-longa-45-ponta-lisa-masster-plus",
    "categoria": "Eletrodutos",
    "linha": "Masster Plus",
    "descricao": "Curva longa 45° ponta lisa em PVC virgem para instalações elétricas aparentes.",
    "aplicacao": "Indicada para mudança suave de direção em sistemas com eletrodutos ponta lisa.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "bitolas": [
      {
        "bitola": "1/2\"",
        "codigo": {
          "Preto": "34061002",
          "Cinza": "36061002",
          "Cinza Claro": "77705002",
          "Branco Gelo": "37061002",
          "Vermelho": "38061002"
        }
      },
      {
        "bitola": "3/4\"",
        "codigo": {
          "Preto": "34061004",
          "Cinza": "36061004",
          "Cinza Claro": "77705004",
          "Branco Gelo": "37061004",
          "Vermelho": "38061004"
        }
      },
      {
        "bitola": "1\"",
        "codigo": {
          "Preto": "34061006",
          "Cinza": "36061006",
          "Cinza Claro": "77705006",
          "Branco Gelo": "37061006",
          "Vermelho": "38061006"
        }
      }
    ],
    "embalagem": {
      "1/2\"": 20,
      "3/4\"": 20,
      "1\"": 20
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/curva-45-ponta-lisa.webp",
    "pdf_ficha_tecnica": "/pdfs/curva-longa-45-ponta-lisa-masster-plus.pdf"
  },
  {
    "id": "P009",
    "nome": "Adaptador para Caixas Pequenas, Normais e Grandes - Masster Plus",
    "slug": "adaptador-caixas-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Adaptador em PVC virgem para conexão de eletrodutos a caixas pequenas, normais ou grandes.",
    "aplicacao": "Utilizado para transição entre eletrodutos e caixas de passagem em instalações aparentes.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "bitolas": [
      {
        "bitola": "1/2\"",
        "codigo": {
          "Preto": "44031002",
          "Cinza": "46041002",
          "Cinza Claro": "77257002",
          "Branco Gelo": "47031002",
          "Vermelho": "48031002"
        }
      },
      {
        "bitola": "3/4\"",
        "codigo": {
          "Preto": "44031004",
          "Cinza": "46041004",
          "Cinza Claro": "77257004",
          "Branco Gelo": "47031004",
          "Vermelho": "48031004"
        }
      },
      {
        "bitola": "1\"",
        "codigo": {
          "Preto": "44031006",
          "Cinza": "46041006",
          "Cinza Claro": "77257006",
          "Branco Gelo": "47031006",
          "Vermelho": "48031006"
        }
      },
      {
        "bitola": "1.1/4\"",
        "codigo": {
          "Preto": "44031008",
          "Cinza": "46041008",
          "Cinza Claro": "77257008",
          "Branco Gelo": "47031008",
          "Vermelho": "48031008"
        }
      },
      {
        "bitola": "1.1/2\"",
        "codigo": {
          "Preto": "44031010",
          "Cinza": "46041010",
          "Cinza Claro": "77257010",
          "Branco Gelo": "47031010",
          "Vermelho": "48031010"
        }
      },
      {
        "bitola": "2\"",
        "codigo": {
          "Preto": "44031012",
          "Cinza": "46041012",
          "Cinza Claro": "77257012",
          "Branco Gelo": "47031012",
          "Vermelho": "48031012"
        }
      }
    ],
    "embalagem": {
      "1/2\"": 50,
      "3/4\"": 50,
      "1\"": 20,
      "1.1/4\"": 10,
      "1.1/2\"": 10,
      "2\"": 10
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/adaptador-liso-3-4.webp",
    "pdf_ficha_tecnica": "/pdfs/adaptador-caixas-masster-plus.pdf"
  },
  {
    "id": "P010",
    "nome": "Tampa de Acabamento (Tampão) - Masster Plus",
    "slug": "tampao-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampão de acabamento produzido em PVC virgem para fechamento de eletrodutos aparentes.",
    "aplicacao": "Utilizado para finalizar instalações aparentes sem continuidade de tubulação.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "bitolas": [
      {
        "bitola": "1/2\", 3/4\", 1\"",
        "codigo": {
          "Preto": "44485026",
          "Cinza": "46485026",
          "Cinza Claro": "77554026",
          "Branco Gelo": "47485026",
          "Vermelho": "48485026"
        }
      },
      {
        "bitola": "1.1/4\"",
        "codigo": {
          "Preto": "44485008",
          "Cinza": "46485008",
          "Cinza Claro": "77554008",
          "Branco Gelo": "47485008",
          "Vermelho": "48485008"
        }
      },
      {
        "bitola": "1.1/2\"",
        "codigo": {
          "Preto": "44485010",
          "Cinza": "46485010",
          "Cinza Claro": "77554010",
          "Branco Gelo": "47485010",
          "Vermelho": "48485010"
        }
      },
      {
        "bitola": "2\"",
        "codigo": {
          "Preto": "44485012",
          "Cinza": "46485012",
          "Cinza Claro": "77554012",
          "Branco Gelo": "47485012",
          "Vermelho": "48485012"
        }
      }
    ],
    "embalagem": {
      "1/2\", 3/4\", 1\"": 60,
      "1.1/4\"": 10,
      "1.1/2\"": 10,
      "2\"": 10
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-de-acabamento-tampao.webp",
    "pdf_ficha_tecnica": "/pdfs/tampao-masster-plus.pdf"
  },
  {
    "id": "P011",
    "nome": "Adaptador Bolsa/Rosca (Conector Reto) - Masster Plus",
    "slug": "adaptador-bolsa-rosca-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Adaptador bolsa/rosca em PVC virgem para conexão entre eletrodutos e caixas ou equipamentos.",
    "aplicacao": "Utilizado como conector reto ou unidut em sistemas aparentes.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "bitolas": [
      {
        "bitola": "1/2\"",
        "codigo": {
          "Preto": "44061002",
          "Cinza": "46031002",
          "Cinza Claro": "77310002",
          "Branco Gelo": "47041002",
          "Vermelho": "48041002"
        }
      },
      {
        "bitola": "3/4\"",
        "codigo": {
          "Preto": "44061004",
          "Cinza": "46031004",
          "Cinza Claro": "77310004",
          "Branco Gelo": "47041004",
          "Vermelho": "48041004"
        }
      },
      {
        "bitola": "1\"",
        "codigo": {
          "Preto": "44061006",
          "Cinza": "46031006",
          "Cinza Claro": "77310006",
          "Branco Gelo": "47041006",
          "Vermelho": "48041006"
        }
      }
    ],
    "embalagem": {
      "1/2\"": 10,
      "3/4\"": 10,
      "1\"": 10
    },
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/adaptador-liso-roscavel-1-2.webp",
    "pdf_ficha_tecnica": "/pdfs/adaptador-bolsa-rosca-masster-plus.pdf"
  },
  {
    "id": "P012",
    "nome": "Conduletes e Caixas - Masster Plus",
    "slug": "conduletes-caixas-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Conduletes e caixas em PVC virgem utilizadas em instalações elétricas aparentes prediais.",
    "aplicacao": "Permite derivações, conexões e fixação de eletrodutos aparentes.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "entradas": 5,
        "tamanho": "Caixa Pequena",
        "dimensoes": "96 × 45 × 50 mm",
        "compatibilidade": "1/2\", 3/4\", 1\"",
        "codigo": {
          "Preto": "44401024",
          "Cinza": "46401024",
          "Cinza Claro": "77355024",
          "Branco Gelo": "47101024",
          "Vermelho": "48101024"
        },
        "embalagem": 20
      },
      {
        "entradas": 6,
        "tamanho": "Caixa Pequena",
        "dimensoes": "96 × 45 × 50 mm",
        "compatibilidade": "1/2\", 3/4\", 1\"",
        "codigo": {
          "Preto": "44421006",
          "Cinza": "46421006",
          "Cinza Claro": "77355006",
          "Branco Gelo": "47121006",
          "Vermelho": "48121006"
        },
        "embalagem": 12
      },
      {
        "entradas": 6,
        "tamanho": "Caixa Normal",
        "dimensoes": "117 × 51 × 60 mm",
        "compatibilidade": "1/2\", 3/4\", 1\"",
        "codigo": {
          "Preto": "44421026",
          "Cinza": "46421026",
          "Cinza Claro": "77355026",
          "Branco Gelo": "47121026",
          "Vermelho": "48121026"
        },
        "embalagem": 12
      },
      {
        "entradas": 5,
        "tamanho": "Caixa Normal",
        "dimensoes": "117 × 51 × 60 mm",
        "compatibilidade": "1/2\", 3/4\", 1\"",
        "codigo": {
          "Preto": "44401026",
          "Cinza": "46401026",
          "Cinza Claro": "77355026",
          "Branco Gelo": "47101026",
          "Vermelho": "48101026"
        },
        "embalagem": 20
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/caixa-5-entradas.webp",
    "pdf_ficha_tecnica": "/pdfs/conduletes-masster-plus.pdf"
  },
  {
    "id": "P013",
    "nome": "Tampa Tomada Hexagonal Vertical - Masster Plus",
    "slug": "tampa-tomada-hexagonal-vertical-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa de tomada hexagonal vertical em PVC virgem para instalações elétricas aparentes.",
    "aplicacao": "Utilizada para acabamento estético e fixação de pontos de tomada verticais em conduletes ou caixas aparentes.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44664024",
          "Cinza": "46534024",
          "Cinza Claro": "77464024",
          "Branco Gelo": "47534024",
          "Vermelho": "48534024"
        },
        "embalagem": 20
      },
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44684006",
          "Cinza": "46734006",
          "Cinza Claro": "77464006",
          "Branco Gelo": "47734006",
          "Vermelho": "48734006"
        },
        "embalagem": 12
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-tomada-hexagonal-vertical.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-tomada-hexagonal-vertical-masster-plus.pdf"
  },
  {
    "id": "P014",
    "nome": "Tampa Tomada Hexagonal Horizontal - Masster Plus",
    "slug": "tampa-tomada-hexagonal-horizontal-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa de tomada hexagonal horizontal em PVC virgem para instalações elétricas aparentes.",
    "aplicacao": "Indicada para finalização de tomadas horizontais em caixas ou conduletes da linha aparente.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44694024",
          "Cinza": "46554024",
          "Cinza Claro": "77494024",
          "Branco Gelo": "47554024",
          "Vermelho": "48554024"
        },
        "embalagem": 20
      },
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44754006",
          "Cinza": "46754006",
          "Cinza Claro": "77494006",
          "Branco Gelo": "47754006",
          "Vermelho": "48754006"
        },
        "embalagem": 12
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-tomada-hexagonal-horizontal.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-tomada-hexagonal-horizontal-masster-plus.pdf"
  },
  {
    "id": "P015",
    "nome": "Tampa 1 Tecla - Masster Plus",
    "slug": "tampa-1-tecla-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa para interruptor de 1 tecla em PVC virgem, indicada para instalações aparentes prediais.",
    "aplicacao": "Aplicada em instalações elétricas aparentes para acabamento de interruptores simples.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44564024",
          "Cinza": "46564024",
          "Cinza Claro": "77434024",
          "Branco Gelo": "47564024",
          "Vermelho": "48564024"
        },
        "embalagem": 20
      },
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44764006",
          "Cinza": "46764006",
          "Cinza Claro": "77434006",
          "Branco Gelo": "47764006",
          "Vermelho": "48764006"
        },
        "embalagem": 12
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-1-tecla.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-1-tecla-masster-plus.pdf"
  },
  {
    "id": "P016",
    "nome": "Tampa 2 Teclas - Masster Plus",
    "slug": "tampa-2-teclas-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa para interruptor de 2 teclas fabricada em PVC virgem para instalações aparentes.",
    "aplicacao": "Indicada para acabamento de interruptores duplos em conduletes ou caixas aparentes.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44564026",
          "Cinza": "46564026",
          "Cinza Claro": "77424026",
          "Branco Gelo": "47564026",
          "Vermelho": "48564026"
        },
        "embalagem": 20
      },
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44764006",
          "Cinza": "46764006",
          "Cinza Claro": "77424006",
          "Branco Gelo": "47764006",
          "Vermelho": "48764006"
        },
        "embalagem": 12
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-2-teclas.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-2-teclas-masster-plus.pdf"
  },
  {
    "id": "P017",
    "nome": "Tampa 1 Módulo RJ45 / RJ11 - Masster Plus",
    "slug": "tampa-1-modulo-rj45-rj11-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa em PVC virgem compatível com conectores RJ45 ou RJ11 para instalações aparentes.",
    "aplicacao": "Utilizada para passagem, fixação e acabamento de pontos de rede ou telefonia.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44624024",
          "Cinza": "46624024",
          "Cinza Claro": "77514024",
          "Branco Gelo": "47624024",
          "Vermelho": "48624024"
        },
        "embalagem": 20
      },
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44824006",
          "Cinza": "46824006",
          "Cinza Claro": "77514006",
          "Branco Gelo": "47624006",
          "Vermelho": "48824006"
        },
        "embalagem": 12
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-1-modulo-rj-45-e-rj-11.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-1-modulo-rj-masster-plus.pdf"
  },
  {
    "id": "P018",
    "nome": "Tampa 2 Módulos RJ45 / RJ11 - Masster Plus",
    "slug": "tampa-2-modulos-rj45-rj11-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa dupla em PVC virgem para instalação de até dois módulos RJ45 ou RJ11.",
    "aplicacao": "Ideal para pontos duplos de rede ou telefonia em instalações aparentes.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44664024",
          "Cinza": "46644024",
          "Cinza Claro": "77524024",
          "Branco Gelo": "47644024",
          "Vermelho": "48644024"
        },
        "embalagem": 20
      },
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44844006",
          "Cinza": "46844006",
          "Cinza Claro": "77524006",
          "Branco Gelo": "47844006",
          "Vermelho": "48844006"
        },
        "embalagem": 12
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-2-modulos-rj-45-e-rj-11.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-2-modulos-rj-masster-plus.pdf"
  },{
    "id": "P019",
    "nome": "Tampa Cega - Masster Plus",
    "slug": "tampa-cega-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa lisa sem abertura em PVC virgem para fechamento de pontos elétricos aparentes.",
    "aplicacao": "Utilizada para finalizar caixas elétricas quando não há instalação de tomada ou interruptor.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44564024",
          "Cinza": "46564024",
          "Cinza Claro": "77404024",
          "Branco Gelo": "47504024",
          "Vermelho": "48504024"
        },
        "embalagem": 20
      },
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44764006",
          "Cinza": "46764006",
          "Cinza Claro": "77404006",
          "Branco Gelo": "47764006",
          "Vermelho": "48704006"
        },
        "embalagem": 12
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-cega.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-cega-masster-plus.pdf"
  },
  {
    "id": "P020",
    "nome": "Tampa Tomada Redonda - Masster Plus",
    "slug": "tampa-tomada-redonda-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa para tomada redonda fabricada em PVC virgem para instalações aparentes prediais.",
    "aplicacao": "Compatível com tomadas padrão circular, ideal para uso com conduletes e caixas aparentes.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44524024",
          "Cinza": "46524024",
          "Cinza Claro": "77454024",
          "Branco Gelo": "47574024",
          "Vermelho": "48574024"
        },
        "embalagem": 20
      },
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44724006",
          "Cinza": "46724006",
          "Cinza Claro": "77454006",
          "Branco Gelo": "47724006",
          "Vermelho": "48724006"
        },
        "embalagem": 12
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-tomada-redonda.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-tomada-redonda-masster-plus.pdf"
  },
  {
    "id": "P021",
    "nome": "Tampa 3 Teclas - Masster Plus",
    "slug": "tampa-3-teclas-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa para interruptores de 3 teclas em instalações elétricas aparentes.",
    "aplicacao": "Utilizada para acabamento de caixas aparentes com interruptores triplos.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44584024",
          "Cinza": "46584024",
          "Cinza Claro": "77464024",
          "Branco Gelo": "47584024",
          "Vermelho": "48584024"
        },
        "embalagem": 20
      },
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44784006",
          "Cinza": "46784006",
          "Cinza Claro": "77464006",
          "Branco Gelo": "47784006",
          "Vermelho": "48784006"
        },
        "embalagem": 12
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-3-teclas-1-2-e-3-4.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-3-teclas-masster-plus.pdf"
  },
  {
    "id": "P022",
    "nome": "Tampa 2 Teclas Separadas - Masster Plus",
    "slug": "tampa-2-teclas-separadas-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa com dois espaços independentes para interruptores em instalações aparentes.",
    "aplicacao": "Ideal para circuitos separados com acionamento duplo.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44604024",
          "Cinza": "46604024",
          "Cinza Claro": "77474024",
          "Branco Gelo": "47604024",
          "Vermelho": "48604024"
        },
        "embalagem": 20
      },
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44804006",
          "Cinza": "46804006",
          "Cinza Claro": "77474006",
          "Branco Gelo": "47804006",
          "Vermelho": "48804006"
        },
        "embalagem": 12
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-2-teclas-1-2-e-3-4.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-2-teclas-separadas-masster-plus.pdf"
  },
  {
    "id": "P023",
    "nome": "Tampa 1 Tecla + Tomada Hexagonal - Masster Plus",
    "slug": "tampa-1-tecla-tomada-hexagonal-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa combinada com espaço para interruptor simples e tomada hexagonal padrão.",
    "aplicacao": "Serve para pontos elétricos que combinam iluminação e tomada no mesmo módulo.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44554024",
          "Cinza": "46574024",
          "Cinza Claro": "77464024",
          "Branco Gelo": "47574024",
          "Vermelho": "48574024"
        },
        "embalagem": 20
      },
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44774006",
          "Cinza": "46774006",
          "Cinza Claro": "77464006",
          "Branco Gelo": "47774006",
          "Vermelho": "48774006"
        },
        "embalagem": 12
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-1-tecla+tomada-hexagonal-3-4.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-1-tecla-tomada-hexagonal-masster-plus.pdf"
  },
  {
    "id": "P024",
    "nome": "Tampa Tomada Hexagonal Horizontal Dupla - Masster Plus",
    "slug": "tampa-tomada-hexagonal-horizontal-dupla-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa dupla para tomadas hexagonais padrão horizontal em PVC virgem.",
    "aplicacao": "Usada quando são necessárias duas tomadas simultâneas no mesmo ponto aparente.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44684024",
          "Cinza": "46594024",
          "Cinza Claro": "77504024",
          "Branco Gelo": "47554024",
          "Vermelho": "48554024"
        },
        "embalagem": 20
      },
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44774006",
          "Cinza": "46774006",
          "Cinza Claro": "77504006",
          "Branco Gelo": "47774006",
          "Vermelho": "48774006"
        },
        "embalagem": 12
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-tomada-hexagonal-horizontal.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-tomada-hexagonal-horizontal-dupla-masster-plus.pdf"
  },
  {
    "id": "P025",
    "nome": "Tampa 2 Teclas + Tomada Hexagonal - Masster Plus",
    "slug": "tampa-2-teclas-tomada-hexagonal-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa dupla para interruptores com espaço adicional para tomada hexagonal.",
    "aplicacao": "Ideal para pontos onde se deseja interruptor duplo e tomada no mesmo módulo.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44574024",
          "Cinza": "46574024",
          "Cinza Claro": "77424024",
          "Branco Gelo": "47574024",
          "Vermelho": "48574024"
        },
        "embalagem": 20
      },
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44774006",
          "Cinza": "46774006",
          "Cinza Claro": "77464006",
          "Branco Gelo": "47774006",
          "Vermelho": "48774006"
        },
        "embalagem": 12
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-2-teclas+tomada-hexagonal-3-4.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-2-teclas-tomada-hexagonal-masster-plus.pdf"
  },
  {
    "id": "P026",
    "nome": "Tampa Redutora para Caixa Grande - Masster Plus",
    "slug": "tampa-redução-caixa-grande-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa redutora para caixas grandes, permitindo adaptação de bitolas 1/2\", 3/4\" e 1\".",
    "aplicacao": "Utilizada para converter aberturas maiores de caixas aparentes para eletrodutos menores.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "bitola": "1.1/4\"",
        "reduz_para": ["1/2\"", "3/4\"", "1\""],
        "codigo": {
          "Preto": "44495008",
          "Cinza": "46495008",
          "Cinza Claro": "77564008",
          "Branco Gelo": "47495008",
          "Vermelho": "48495008"
        },
        "embalagem": 10
      },
      {
        "bitola": "1.1/2\"",
        "reduz_para": ["1/2\"", "3/4\"", "1\""],
        "codigo": {
          "Preto": "44495010",
          "Cinza": "46495010",
          "Cinza Claro": "77564010",
          "Branco Gelo": "47495010",
          "Vermelho": "48495010"
        },
        "embalagem": 10
      },
      {
        "bitola": "2\"",
        "reduz_para": ["1/2\"", "3/4\"", "1\""],
        "codigo": {
          "Preto": "44495012",
          "Cinza": "46495012",
          "Cinza Claro": "77564012",
          "Branco Gelo": "47495012",
          "Vermelho": "48495012"
        },
        "embalagem": 10
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-de-reducao-para-caixa-grande.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-reducao-masster-plus.pdf"
  },
  {
    "id": "P027",
    "nome": "Caixa de Passagem com Tampa Cega (Caixa Grande) - Masster Plus",
    "slug": "caixa-passagem-tampa-cega-grande-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Caixa de passagem grande com tampa cega, fabricada em PVC virgem para instalações aparentes.",
    "aplicacao": "Utilizada como ponto de derivação ou passagem em redes elétricas aparentes.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "tamanho": "Caixa Grande",
        "entradas": 5,
        "dimensoes": "124,5 × 63 × 89,5 mm",
        "compatibilidade": ["1.1/4\"", "1.1/2\"", "2\"", "1/2\"", "3/4\"", "1\""],
        "codigo": {
          "Preto": "46401008",
          "Cinza": "46401010",
          "Cinza Claro": "77355008",
          "Branco Gelo": "47141008",
          "Vermelho": "48141008"
        },
        "embalagem": 3
      },
      {
        "tamanho": "Caixa Grande",
        "entradas": 5,
        "dimensoes": "143,5 × 70 × 82,5 mm",
        "compatibilidade": ["1.1/4\"", "1.1/2\"", "2\"", "1/2\"", "3/4\"", "1\""],
        "codigo": {
          "Preto": "46401010",
          "Cinza": "46401012",
          "Cinza Claro": "77355010",
          "Branco Gelo": "47141010",
          "Vermelho": "48141010"
        },
        "embalagem": 3
      },
      {
        "tamanho": "Caixa Grande",
        "entradas": 5,
        "dimensoes": "161 × 83 × 90 mm",
        "compatibilidade": ["2\"", "1.1/2\"", "1.1/4\"", "1\"", "3/4\"", "1/2\""],
        "codigo": {
          "Preto": "46401012",
          "Cinza": "46401012",
          "Cinza Claro": "77355012",
          "Branco Gelo": "47141012",
          "Vermelho": "48141012"
        },
        "embalagem": 3
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/caixa-5-entradas+tampa-cega.webp",
    "pdf_ficha_tecnica": "/pdfs/caixa-passagem-grand-masster-plus.pdf"
  },
  {
    "id": "P028",
    "nome": "Tampa de Acabamento para Caixa Grande - Masster Plus",
    "slug": "tampa-acabamento-caixa-grande-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa de acabamento para fechamento externo de caixas grandes da linha aparente.",
    "aplicacao": "Usada para vedação e acabamento limpo em caixas da linha Masster Plus.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "bitola": "1.1/4\"",
        "codigo": {
          "Preto": "44485008",
          "Cinza": "46485008",
          "Cinza Claro": "77554008",
          "Branco Gelo": "47485008",
          "Vermelho": "48485008"
        },
        "embalagem": 10
      },
      {
        "bitola": "1.1/2\"",
        "codigo": {
          "Preto": "44485010",
          "Cinza": "46485010",
          "Cinza Claro": "77554010",
          "Branco Gelo": "47485010",
          "Vermelho": "48485010"
        },
        "embalagem": 10
      },
      {
        "bitola": "2\"",
        "codigo": {
          "Preto": "44485012",
          "Cinza": "46485012",
          "Cinza Claro": "77554012",
          "Branco Gelo": "47485012",
          "Vermelho": "48485012"
        },
        "embalagem": 10
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-de-acabamento-tampao-para-caixa-grande.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-acabamento-grande-masster-plus.pdf"
  },
  {
    "id": "P029",
    "nome": "Tampa Modular (Módulo TR) - Masster Plus",
    "slug": "tampa-modular-tr-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa modular padrão TR para instalações elétricas aparentes, permitindo encaixe de módulos modulares.",
    "aplicacao": "Utilizada em caixas aparentes para instalação de módulos como interruptores, tomadas ou conectores.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "44884006",
          "Cinza": "46884006",
          "Cinza Claro": "77604006",
          "Branco Gelo": "47884006",
          "Vermelho": "48884006"
        },
        "embalagem": 12
      },
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44674024",
          "Cinza": "46874024",
          "Cinza Claro": "77604024",
          "Branco Gelo": "47874024",
          "Vermelho": "48874024"
        },
        "embalagem": 20
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-modular-modulo-tr.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-modular-tr-masster-plus.pdf"
  },
  {
    "id": "P030",
    "nome": "Tampa Modular (Módulo MG) - Masster Plus",
    "slug": "tampa-modular-mg-masster-plus",
    "categoria": "Acessórios",
    "linha": "Masster Plus",
    "descricao": "Tampa modular padrão MG para instalações elétricas aparentes, compatível com módulos do sistema MG.",
    "aplicacao": "Aplicada em caixas aparentes da linha Masster Plus permitindo instalação de módulos padronizados MG.",
    "cores_disponiveis": ["Preto", "Cinza", "Cinza Claro", "Branco Gelo", "Vermelho"],
    "variantes": [
      {
        "compatibilidade": "Caixa Normal",
        "codigo": {
          "Preto": "46904006",
          "Cinza": "46904006",
          "Cinza Claro": "77614006",
          "Branco Gelo": "47904006",
          "Vermelho": "48904006"
        },
        "embalagem": 12
      },
      {
        "compatibilidade": "Caixa Pequena",
        "codigo": {
          "Preto": "44984006",
          "Cinza": "44984006",
          "Cinza Claro": "77614024",
          "Branco Gelo": "47904024",
          "Vermelho": "48904024"
        },
        "embalagem": 20
      }
    ],
    "norma": "ABNT NBR 15465:2020",
    "material": "PVC virgem",
    "imagem": "/images/linhas/linha-masster-plus/tampa-modular-modulo-mg.webp",
    "pdf_ficha_tecnica": "/pdfs/tampa-modular-mg-masster-plus.pdf"
  }                               
];