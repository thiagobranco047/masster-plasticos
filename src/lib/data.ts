import produtos from "@/lib/db/produtos.json";
import categorias from "@/lib/db/categorias.json";
import representantes from "@/lib/db/representantes.json";
import type { Produto, Categoria, Representante } from "@/lib/types";

export function getProdutos(): Produto[] {
  return produtos as Produto[];
}

export function getCategorias(): Categoria[] {
  return categorias as Categoria[];
}

export function getRepresentantes(): Representante[] {
  return representantes as Representante[];
}

export function getProdutoBySlug(slug: string): Produto | undefined {
  return getProdutos().find((p) => p.slug === slug);
}

