export default function FAQ() {
  const faqs = [
    {
      question: "É pago para entrar?",
      answer: "Não, é 100% gratuito.",
    },
    {
      question: "Só tem ofertas da Shopee?",
      answer:
        "Principalmente Shopee, mas às vezes aparecem achadinhos em outras lojas e eu aviso.",
    },
    {
      question: "Posso sair do grupo quando quiser?",
      answer: "Sim, com 1 clique, sem burocracia.",
    },
    {
      question: "Vocês ganham comissão?",
      answer:
        "Alguns links são afiliados e podem gerar comissão sem custo adicional para você.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-fredoka text-2xl sm:text-3xl font-bold text-pink mb-10">
          Perguntas frequentes
        </h2>

        <div className="space-y-3 max-w-2xl">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-2xl p-4 shadow-lg border border-pink-soft/30 group"
            >
              <summary className="cursor-pointer font-bold text-dark flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 text-dark/70 text-sm sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
