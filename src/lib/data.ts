import { produtos } from "@/lib/db/produtos";
import { categorias } from "@/lib/db/categorias";
import { representantes } from "@/lib/db/representantes";
import type { Produto, Categoria, Representante } from "@/lib/types";

export function getProdutos(): Produto[] {
  return produtos;
}

export function getCategorias(): Categoria[] {
  return categorias;
}

export function getRepresentantes(): Representante[] {
  return representantes;
}

export function getProdutoBySlug(slug: string): Produto | undefined {
  return getProdutos().find((p) => p.slug === slug);
}

