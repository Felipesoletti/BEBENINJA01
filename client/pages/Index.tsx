export default function Index() {
  const whatsappLink = "https://wa.me/SEU_CODIGO_WHATSAPP";

  const offers = [
    {
      id: 1,
      title: "Fralda Pampers Premium 44un",
      original: "R$119",
      discounted: "R$79",
      details: "com cupom",
    },
    {
      id: 2,
      title: "Kit 5 bodies 100% algodão",
      price: "R$39",
      details: "com cupom APP10",
    },
    {
      id: 3,
      title: "Lenço umedecido 800un",
      price: "R$54",
      details: "no app com moeda Shopee",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-soft to-pink-soft/30 py-14 sm:py-20 lg:py-28">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-pink mb-4">
            Ofertas de mãe para mãe, todos os dias!
          </h1>
          <p className="text-lg sm:text-xl text-dark/80 mb-6 max-w-2xl leading-relaxed">
            Eu compartilho os melhores achadinhos da Shopee. Tem de
            tudo:&nbsp; fraldas, roupinhas, brinquedos e tudo que as
            mamães amam no precinho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 items-start sm:items-center">
            <a
              id="cta"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-6 py-4 bg-gold rounded-full font-bold text-base text-dark transition-transform duration-75 active:translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Quero entrar no grupo agora 💬</span>
              <div className="absolute inset-0 rounded-full border-2 border-gold/60 opacity-90 animate-pulse" style={{ fontWeight: "900" }}></div>
            </a>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <div className="bg-white border-2 border-dashed border-pink-soft/60 px-4 py-2 rounded-full font-bold text-sm text-dark">
              ✅ Grátis
            </div>
            <div className="bg-white border-2 border-dashed border-pink-soft/60 px-4 py-2 rounded-full font-bold text-sm text-dark">
              ✅ Sem spam
            </div>
            <div className="bg-white border-2 border-dashed border-pink-soft/60 px-4 py-2 rounded-full font-bold text-sm text-dark">
              ✅ Saída com 1 clique
            </div>
          </div>
        </div>
      </section>

      {/* Recent Offers Section */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-fredoka text-2xl sm:text-3xl font-bold text-pink mb-10">
            Ofertas recentes
          </h2>

          <div className="space-y-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-gradient-to-r from-pink-soft/20 to-white p-5 sm:p-6 rounded-2xl border border-pink-soft/30 hover:border-pink-soft/60 transition-colors"
              >
                <p className="text-base sm:text-lg text-dark font-semibold mb-2">
                  {offer.title}
                </p>
                <p className="text-sm sm:text-base text-dark/70">
                  {offer.original && (
                    <span className="line-through text-gray-500 mr-2">
                      de {offer.original}
                    </span>
                  )}
                  {offer.discounted && (
                    <span className="font-bold text-pink">
                      por {offer.discounted}
                    </span>
                  )}
                  {offer.price && <span className="font-bold text-pink">{offer.price}</span>}
                  {offer.details && (
                    <span className="ml-2 text-gray-600">{offer.details}</span>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-14">
            <p className="text-center text-dark/70 text-base">
              Cupons e preços mudam constantemente. Siga no WhatsApp para receber
              as melhores ofertas em tempo real! 🎁
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-6 py-4 bg-pink rounded-full font-bold text-base text-white transition-transform duration-75 active:translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Entrar no grupo no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
