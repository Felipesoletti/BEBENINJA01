export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Eu pesquiso ofertas reais na Shopee",
      description:
        "Monitoro descontos, cupons e horários certos para pagar menos.",
    },
    {
      num: 2,
      title: "Envio o link no grupo",
      description: "Você recebe o achadinho pronto para comprar.",
    },
    {
      num: 3,
      title: "Você aplica o cupom e economiza",
      description: "Eu aviso o cupom e como usar no app.",
    },
    {
      num: 4,
      title: "Chega primeiro para quem está no grupo",
      description: "Oferta boa acaba rápido — receba antes que termine.",
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-fredoka text-2xl sm:text-3xl font-bold text-pink mb-6">
          Como funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl p-5 shadow-lg border border-pink-soft/30"
            >
              <div className="w-9 h-9 rounded-full bg-pink text-white flex items-center justify-center font-bold text-lg mb-3">
                {step.num}
              </div>
              <h3 className="font-fredoka text-base font-bold text-dark mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-dark/70">{step.description}</p>
            </div>
          ))}
        </div>

        <a
          href="https://chat.whatsapp.com/JNVECWTZ98BAPKm94YChEA?mode=wwt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-4 bg-gold rounded-full font-bold text-base text-dark transition-transform duration-75 active:translate-y-0.5 shadow-lg hover:shadow-xl"
        >
          Entrar no grupo gratuito 💬
        </a>
      </div>
    </section>
  );
}
