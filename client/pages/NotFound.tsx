import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center px-4">
        <h1 className="font-fredoka text-5xl font-bold text-pink mb-4">404</h1>
        <p className="text-xl text-dark/70 mb-8">Página não encontrada</p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-4 bg-gold rounded-full font-bold text-base text-dark transition-transform duration-75 active:translate-y-0.5 shadow-lg hover:shadow-xl"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
