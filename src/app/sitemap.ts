import { MetadataRoute } from 'next'
import { getProdutos, getCategorias } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.massterplasticos.com.br'
  const currentDate = new Date()
  
  // Páginas estáticas principais
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre-a-empresa`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/linhas-de-produtos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/produtos`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/masster-decor`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/linha-cinza-claro`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/catalogo`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Páginas de produtos dinâmicas
  const produtos = getProdutos()
  const productPages: MetadataRoute.Sitemap = produtos.map((produto) => ({
    url: `${baseUrl}/produtos/${produto.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Páginas de linhas com filtros
  const categorias = getCategorias()
  const linhaPages: MetadataRoute.Sitemap = categorias
    .filter(cat => cat.slug !== 'masster-decor')
    .map((categoria) => {
      const linhaNome = categoria.slug === 'masster-plus' 
        ? 'MassterPlus' 
        : categoria.slug === 'masster-eco'
        ? 'Masster Eco'
        : categoria.nome
      return {
        url: `${baseUrl}/produtos?linha=${encodeURIComponent(linhaNome)}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      }
    })

  return [...staticPages, ...productPages, ...linhaPages]
}
