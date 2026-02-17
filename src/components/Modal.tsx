import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  procedimento: {
    nome: string;
    preco: number;
    precoManutencao: number;
  } | null;
}

export default function Modal({ isOpen, onClose, procedimento }: ModalProps) {
  if (!isOpen || !procedimento) return null;

  const handleAplicação = () => {
    window.open('https://pag.ae/81vUL4Buv', '_blank');
    onClose();
  };

  const handleManutenção = () => {
    window.open('https://pag.ae/81vUL4Buv', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#3A2E2A] hover:text-[#C6A75E] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-[#3A2E2A] mb-2">
          {procedimento.nome}
        </h3>
        <p className="text-[#3A2E2A]/70 mb-6">
          Selecione o tipo de serviço:
        </p>

        <div className="space-y-4">
          <button
            onClick={handleAplicacao}
            className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-left"
          >
            <div className="flex justify-between items-center">
              <span>Aplicação</span>
              <span className="text-xl font-bold">R$ {procedimento.preco}</span>
            </div>
          </button>

          <button
            onClick={handleManutenção}
            className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-left"
          >
            <div className="flex justify-between items-center">
              <span>Manutenção</span>
              <span className="text-xl font-bold">R$ {procedimento.precoManutencao}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
