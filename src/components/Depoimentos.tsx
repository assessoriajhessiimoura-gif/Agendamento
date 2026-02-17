import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const depoimentos = [
  {
    nome: 'Ana Paula Souza',
    texto: 'Ficou super natural e leve, exatamente como eu queria. Atendimento muito cuidadoso e ambiente lindo. Já marquei manutenção!',
    estrelas: 5
  },
  {
    nome: 'Juliana Ribeiro',
    texto: 'Primeira vez fazendo extensão e amei o resultado. A Bianca explica tudo e deixa a gente muito confortável.',
    estrelas: 5
  },
  {
    nome: 'Mariana Fernandes',
    texto: 'Durou bastante e não pesou nos olhos. Trabalho delicado e muito caprichado.',
    estrelas: 5
  },
  {
    nome: 'Camila Rocha',
    texto: 'Ambiente limpo, atendimento pontual e resultado perfeito. Recebo elogios todos os dias.',
    estrelas: 5
  },
  {
    nome: 'Patricia Alves',
    texto: 'Já testei outros lugares e esse foi o melhor resultado que tive. Muito profissional.',
    estrelas: 5
  },
  {
    nome: 'Fernanda Martins',
    texto: 'Extensão confortável e bem natural. Dá pra ver o cuidado em cada detalhe.',
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
          O que minhas clientes dizem
        </h2>
        <p className="text-center text-[#3A2E2A]/70 mb-12 text-lg">
          Avaliações reais de clientes satisfeitas
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
            
            <p className="text-[#3A2E2A] font-semibold text-center text-xl">
              {depoimentos[currentIndex].nome}
            </p>

            <div className="flex gap-1 justify-center mt-2 mb-6">
              {[...Array(depoimentos[currentIndex].estrelas)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C6A75E] text-[#C6A75E]" />
              ))}
            </div>

            <p className="text-[#3A2E2A] text-lg md:text-xl text-center italic leading-relaxed">
              {depoimentos[currentIndex].texto}
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
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
