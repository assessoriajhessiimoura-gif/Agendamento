import { useState } from 'react';
import Modal from './Modal';

interface Procedimento {
  nome: string;
  preco: number;
  precoManutencao: number;
  descricao: string;
  imagem: string;
}

const procedimentos: Procedimento[] = [
  {
    nome: 'Volume Brasileiro',
    preco: 165,
    precoManutencao: 110,
    descricao: 'Técnica que proporciona volume natural e elegante, perfeito para o dia a dia.',
    imagem: '/WhatsApp_Image_2026-02-16_at_12.14.05.jpeg'
  },
  {
    nome: 'Volume Fox',
    preco: 165,
    precoManutencao: 110,
    descricao: 'Técnica sofisticada que cria um efeito de leque dramático e volumoso.',
    imagem: '/WhatsApp_Image_2026-02-16_at_12.14.06_(1).jpeg'
  },
  {
    nome: 'Volume Europeu',
    preco: 165,
    precoManutencao: 110,
    descricao: 'Efeito alongado e felino, perfeito para um olhar marcante e sedutor.',
    imagem: '/WhatsApp_Image_2026-02-16_at_12.14.07_(2).jpeg'
  },
  {
    nome: 'Volume Fox Marrom',
    preco: 165,
    precoManutencao: 110,
    descricao: 'Variação do Fox com fios marrons para um efeito mais suave e natural.',
    imagem: '/WhatsApp_Image_2026-02-16_at_12.14.06.jpeg'
  },
  {
    nome: 'Volume Express',
    preco: 165,
    precoManutencao: 110,
    descricao: 'Aplicação rápida e prática, ideal para quem busca resultados imediatos.',
    imagem: '/WhatsApp Image 2026-02-16 at 14.40.49 (1).jpeg'
  },
  {
    nome: 'Mega Volume',
    preco: 180,
    precoManutencao: 120,
    descricao: 'Aplicação rápida e prática, ideal para quem busca resultados imediatos.',
    imagem: '/WhatsApp_Image_2026-02-16_at_12.14.07_(1).jpeg'
  },
  {
    nome: 'Mega Volume',
    preco: 180,
    precoManutencao: 120,
    descricao: 'Máximo volume e densidade, perfeito para eventos especiais e looks glamourosos.',
    imagem: '/WhatsApp_Image_2026-02-16_at_12.14.07.jpeg'
  }
];

export default function Procedimentos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProcedimento, setSelectedProcedimento] = useState<Procedimento | null>(null);

  const handleAgendar = (procedimento: Procedimento) => {
    setSelectedProcedimento(procedimento);
    setModalOpen(true);
  };

  return (
    <>
      <section id="procedimentos" className="py-20 bg-[#FAF8F5] animate-gentle-sway">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3A2E2A] mb-4">
            Nossos Procedimentos
          </h2>
          <p className="text-center text-[#3A2E2A]/70 mb-12 text-lg">
            Técnicas premium para realçar sua beleza natural
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedimentos.map((proc, index) => (
              <div
                key={`${proc.nome}-${index}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#C6A75E] hover:scale-105 animate-gentle-sway"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={proc.imagem}
                    alt={proc.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#3A2E2A] mb-2">
                    {proc.nome}
                  </h3>
                  <p className="text-[#C6A75E] text-2xl font-bold mb-3">
                    R$ {proc.preco}
                  </p>
                  <p className="text-[#3A2E2A]/70 mb-6">
                    {proc.descricao}
                  </p>
                  <button
                    onClick={() => handleAgendar(proc)}
                    className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    Agendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        procedimento={selectedProcedimento}
      />
    </>
  );
}
