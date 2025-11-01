export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-pink-soft/90 backdrop-blur-md border-b border-pink-soft/50">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-pink to-pink-soft rounded-xl flex-shrink-0 flex items-center justify-center">
              <span className="text-white font-bold text-lg">👶</span>
            </div>
            <div>
              <div className="font-fredoka font-bold text-base text-pink">
                Achados Bebê Ninja
              </div>
              <div className="text-xs text-gray-600 -mt-1">
                Ofertas diárias direto no seu WhatsApp
              </div>
            </div>
          </div>
          <a
            href="#cta"
            className="relative inline-flex items-center justify-center px-5 py-3.5 bg-gold rounded-full font-bold text-sm text-dark transition-transform duration-75 active:translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">Entrar no grupo grátis 💬</span>
            <div className="absolute inset-0 rounded-full border-2 border-gold/60 opacity-90 animate-pulse"></div>
          </a>
        </nav>
      </div>
    </header>
  );
}
