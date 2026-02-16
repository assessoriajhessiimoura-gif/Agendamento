import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const depoimentos = [
  {
    nome: 'Maria Silva',
    texto: 'Trabalho impecável! A Bianca é extremamente profissional e cuidadosa. Meus cílios ficaram perfeitos e duraram muito tempo. Super recomendo!',
    estrelas: 5
  },
  {
    nome: 'Ana Costa',
    texto: 'Melhor lash designer de Belo Horizonte! Atendimento perfeito, ambiente acolhedor e resultado maravilhoso. Não troco por nada!',
    estrelas: 5
  },
  {
    nome: 'Juliana Oliveira',
    texto: 'Simplesmente perfeito! A Bianca entende exatamente o que queremos e entrega um trabalho impecável. Já sou cliente fiel há meses!',
    estrelas: 5
  },
  {
    nome: 'Carla Mendes',
    texto: 'Profissional excepcional! Além da técnica perfeita, a Bianca é super atenciosa e cuidadosa. Meus cílios nunca ficaram tão bonitos!',
    estrelas: 5
  },
  {
    nome: 'Fernanda Lima',
    texto: 'Estou apaixonada pelo resultado! A Bianca é super detalhista e o trabalho dela é impecável. Vale cada centavo investido!',
    estrelas: 5
  },
  {
    nome: 'Patricia Santos',
    texto: 'Excelente profissional! Ambiente limpo, organizado e acolhedor. O resultado superou todas as minhas expectativas. Recomendo muito!',
    estrelas: 5
  }
];

export default function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDepoimento = () => {
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const prevDepoimento = () => {
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section className="py-20 bg-[#FAF8F5] animate-gentle-sway">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3A2E2A] mb-4">
          O que nossos clientes dizem
        </h2>
        <p className="text-center text-[#3A2E2A]/70 mb-12 text-lg">
          Avaliações reais de clientes satisfeitos
        </p>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevDepoimento}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white hover:bg-[#C6A75E] text-[#3A2E2A] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#C6A75E] transition-all duration-500 animate-gentle-sway">
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(depoimentos[currentIndex].estrelas)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#C6A75E] text-[#C6A75E]" />
              ))}
            </div>
            <p className="text-[#3A2E2A] text-lg md:text-xl text-center mb-6 italic">
              "{depoimentos[currentIndex].texto}"
            </p>
            <p className="text-[#C6A75E] font-semibold text-center text-xl">
              {depoimentos[currentIndex].nome}
            </p>
          </div>

          <button
            onClick={nextDepoimento}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white hover:bg-[#C6A75E] text-[#3A2E2A] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#C6A75E] w-8' : 'bg-[#C6A75E]/30'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
