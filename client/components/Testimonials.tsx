export default function Testimonials() {
  const testimonials = [
    {
      quote: "Economizei R$180 no enxoval só este mês!",
      author: "Larissa",
    },
    {
      quote: "Cupom toda semana e link pronto!",
      author: "Camila",
    },
    {
      quote: "Prático demais, recebo e compro em 1 minuto.",
      author: "Júlia",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-fredoka text-2xl sm:text-3xl font-bold text-pink mb-10">
          O que as mamães falam
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-lg border-l-4 border-pink"
            >
              <p className="text-sm sm:text-base text-dark/80 mb-3">
                "{testimonial.quote}"
              </p>
              <p className="text-sm font-bold text-dark">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
