import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2B2C2C' }}>
      {/* Linha divisória */}
      <div className="border-t border-white/10 w-full"></div>
      {/* Main footer content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Descrição + Redes Sociais */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Masster Plásticos</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Líder em soluções plásticas de alta qualidade, oferecendo produtos inovadores 
                para diversos segmentos industriais com excelência e confiabilidade.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Siga-nos</h4>
              <div className="flex items-center space-x-4">
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors" title="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors" title="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors" title="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors" title="YouTube">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
                <div className="h-4 w-px bg-gray-600"></div>
                <a href="https://g.page/r/CQkaN-xu81wREAI/review" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm font-medium">
                  Avalie no Google
                </a>
              </div>
            </div>
          </div>

          {/* Páginas */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Páginas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Início</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Produtos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Catálogo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Representantes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Qualidade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Linhas */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Linhas</h4>
            <ul className="space-y-2">
              <li><Link href="/produtos?categoria=Acessórios" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Acessórios</Link></li>
              <li><Link href="/produtos?categoria=Condução" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Condução</Link></li>
              <li><Link href="/produtos?categoria=Caixas e Conduletes" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Caixas e Conduletes</Link></li>
              <li><Link href="/produtos?categoria=Eletrodutos" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Eletrodutos</Link></li>
              <li><Link href="/produtos?categoria=Plus" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Plus</Link></li>
              <li><Link href="/produtos?categoria=Modular" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Modular</Link></li>
              <li><Link href="/produtos?categoria=Tampões" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Tampões</Link></li>
              <li><Link href="/produtos?categoria=Tampas" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Tampas</Link></li>
              <li><Link href="/produtos?categoria=Masster Decor" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Masster Decor</Link></li>
              <li><Link href="/produtos?categoria=Linha Masster Eco" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">Linha Masster Eco</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm font-medium mb-1">Telefone</p>
                <a href="tel:+554734240746" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">
                  (47) 3424-0746
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-sm font-medium mb-1">Televendas</p>
                <a href="tel:+554799785-0103" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm">
                  (47) 99785-0103
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-sm font-medium mb-1">Endereço</p>
                <address className="text-gray-300 text-sm not-italic">
                  Avenida das Industrias, 778<br />
                  Porto Grande<br />
                  Araquari - SC<br />
                  CEP: 89.245-000
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="border-t border-white/10 w-full"></div>

      {/* Copyright section */}
      <div className="container py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-300">
        <p>
          © {new Date().getFullYear()} Masster Plásticos. Todos os direitos reservados.
        </p>
        <p>
            Criado por <span className="font-medium">Lab. 334 Marketing</span>
        </p>
        </div>
      </div>
    </footer>
  );
}

