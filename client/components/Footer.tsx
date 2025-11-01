export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-white border-t border-pink-soft/30">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-8 justify-between items-start sm:items-center mb-8 pb-8 border-b border-pink-soft/20">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F478dd5b6d5b64a38a1e35f09fc3278b4%2Fb72927da24ef4e40af3ceb2f65322fbe?format=webp&width=800"
              alt="Logo"
              className="w-9 h-9 rounded-lg object-cover"
            />
            <strong className="text-dark font-fredoka">
              Achados Bebê Ninja
            </strong>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-dark/70">
            <a href="#" className="hover:text-pink transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-pink transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-pink transition-colors">
              Contato
            </a>
          </div>
        </div>
        <p className="text-xs text-gray-600">
          Achados Bebê Ninja é um projeto informativo. Alguns links podem gerar
          comissão sem custo adicional para o usuário. Preços e cupons sujeitos
          a alteração.
        </p>
      </div>
    </footer>
  );
}
