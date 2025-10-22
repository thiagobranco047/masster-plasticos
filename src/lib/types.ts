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

export type Bitola = {
  bitola: string;
  codigo: Record<string, string>;
};

export type Embalagem = {
  [bitola: string]: number;
};

export type Produto = {
  id: string;
  nome: string;
  slug: string;
  categoria: string;
  linha: string;
  descricao: string;
  aplicacao: string;
  cores_disponiveis: string[];
  bitolas: Bitola[];
  embalagem: Embalagem;
  norma?: string;
  material: string;
  imagem: string;
  pdf_ficha_tecnica?: string;
  // Campos legados para compatibilidade
  cores?: string[];
  fichaTecnica?: Record<string, string>;
  medidas?: Medida[];
  galeria?: string[];
};

export type Representante = {
  nome: string;
  estado: string;
  cidade: string;
  telefone: string;
  whatsapp: string;
};

