import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Index() {
  const whatsappLink =
    "https://chat.whatsapp.com/JNVECWTZ98BAPKm94YChEA?mode=wwt";
  const telegramLink = "https://t.me/SEU_GRUPO_TELEGRAM";

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
      <section className="bg-gradient-to-b from-pink-soft to-pink-soft/30 py-10 sm:py-14 lg:py-20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
              <h1 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-pink mb-2 leading-tight">
                Ofertas de mãe para mãe, todos os dias!
              </h1>
              <p className="text-lg sm:text-xl text-dark/80 mb-4 leading-relaxed">
                Eu compartilho os melhores achadinhos da Shopee. Tem de
                tudo:&nbsp; fraldas, roupinhas, brinquedos e tudo que as mamães
                amam no precinho.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a
                  id="cta"
                  href={
                    "https://chat.whatsapp.com/JNVECWTZ98BAPKm94YChEA?mode=wwt"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center px-6 py-4 bg-gold rounded-full font-bold text-base text-dark transition-transform duration-75 active:translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10 text-center">
                    Quero entrar no grupo agora 💬
                  </span>
                  <div
                    className="absolute inset-0 rounded-full border-2 border-gold/60 opacity-90 animate-pulse"
                    style={{ fontWeight: "900", left: "11px" }}
                  ></div>
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
                <div className="bg-white border-2 border-dashed border-pink-soft/60 px-4 py-2 rounded-full font-bold text-sm text-dark">
                  👩‍👧‍👦 <span className="text-pink font-black">+1.000</span> mamães
                  já participam
                </div>
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-pink via-pink-soft to-pink-soft flex items-center justify-center shadow-2xl">
                <div
                  className="flex flex-col items-center justify-center gap-2.5 text-white text-center"
                  style={{ padding: "24px 40px 24px 24px" }}
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F478dd5b6d5b64a38a1e35f09fc3278b4%2Fb72927da24ef4e40af3ceb2f65322fbe?format=webp&width=800"
                    alt="Bebê Ninja Mascote"
                    className="h-auto drop-shadow-2xl"
                    style={{ width: "400px", margin: "0 -4px 0 4px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Benefits */}
      <Benefits />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-pink-soft/40 via-pink-soft/20 to-white border-2 border-dashed border-pink-soft/50 rounded-3xl p-8 sm:p-10 text-center shadow-lg">
            <h2 className="font-fredoka text-2xl sm:text-3xl font-bold text-pink mb-6">
              Receba as melhores ofertas de bebê todos os dias!
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href={
                  "https://chat.whatsapp.com/JNVECWTZ98BAPKm94YChEA?mode=wwt"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-6 py-4 bg-gold rounded-full font-bold text-base text-dark transition-transform duration-75 active:translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Entrar no grupo agora 💬</span>
                <div className="absolute inset-0 rounded-full border-2 border-gold/60 opacity-90 animate-pulse"></div>
              </a>
            </div>

            <p className="text-gray-600 text-base">Grátis, rápido e seguro.</p>
          </div>
        </div>
      </section>
    </>
  );
}
