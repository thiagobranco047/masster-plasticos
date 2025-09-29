export type Categoria = {
  nome: string;
  slug: string;
  descricao: string;
};

export type Medida = {
  codigo: string;
  altura?: number;
  diametro?: number;
  largura?: number;
  profundidade?: number;
  peso?: number;
};

export type Produto = {
  nome: string;
  slug: string;
  descricao: string;
  imagem: string;
  cores: string[];
  categoria: string;
  fichaTecnica: Record<string, string>;
  medidas: Medida[];
  galeria: string[];
};

export type Representante = {
  nome: string;
  estado: string;
  cidade: string;
  telefone: string;
  whatsapp: string;
};

