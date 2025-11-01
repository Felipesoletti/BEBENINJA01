export default function Benefits() {
  const benefits = [
    {
      title: "Economize",
      description: "em fraldas, roupas e brinquedos essenciais do dia a dia.",
    },
    {
      title: "Cupons escondidos",
      description: "e alertas relâmpago que somem em minutos.",
    },
    {
      title: "Sem perder tempo",
      description: "comparando preços em mil abas.",
    },
    {
      title: "Tudo em um só lugar",
      description: ", 100% grátis e prático.",
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-fredoka text-2xl sm:text-3xl font-bold text-pink mb-6">
          Por que participar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-pink-soft/20 rounded-2xl p-6 border border-pink-soft/30"
            >
              <p className="text-base sm:text-lg text-dark">
                <strong>{benefit.title}</strong>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
