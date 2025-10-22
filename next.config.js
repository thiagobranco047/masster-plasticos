/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desabilitar favicon para evitar erros 500
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
  // Configurações adicionais para evitar erros
  experimental: {
    optimizePackageImports: ['@/lib/db/produtos'],
  },
};

module.exports = nextConfig;
