import { Award, Star, HeadphonesIcon, BookOpen } from 'lucide-react';

export default function Curso() {
  return (
    <section className="py-20 bg-[#F5EFE6] animate-gentle-sway">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3A2E2A] mb-4">
              Curso de Extensão de Cílios
            </h2>
            <p className="text-xl text-[#C6A75E] mb-6">
              Com certificado reconhecido
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[#3A2E2A] mb-4">
                Benefícios
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#C6A75E]" />
                  <span className="text-[#3A2E2A]">Certificado Reconhecido</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-[#C6A75E]" />
                  <span className="text-[#3A2E2A]">Curso VIP</span>
                </div>
                <div className="flex items-center gap-3">
                  <HeadphonesIcon className="w-6 h-6 text-[#C6A75E]" />
                  <span className="text-[#3A2E2A]">Suporte completo</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-[#C6A75E]" />
                  <span className="text-[#3A2E2A]">Suporte pós curso</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg mb-8 border border-[#C6A75E]">
              <h3 className="text-2xl font-semibold text-[#3A2E2A] mb-4">
                O que você vai aprender
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A75E] text-xl">✓</span>
                  <span className="text-[#3A2E2A]">Todas as técnicas de alongamentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A75E] text-xl">✓</span>
                  <span className="text-[#3A2E2A]">Alinhamento e direcionamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A75E] text-xl">✓</span>
                  <span className="text-[#3A2E2A]">Cuidados e manutenção</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A75E] text-xl">✓</span>
                  <span className="text-[#3A2E2A]">Lista de materiais(materiais a parte)</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-md border border-[#C6A75E] flex-1">
                <p className="text-[#3A2E2A]/70 text-sm mb-1">1 dia</p>
                <p className="text-3xl font-bold text-[#C6A75E]">R$ 650</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-[#C6A75E] flex-1">
                <p className="text-[#3A2E2A]/70 text-sm mb-1">2 dias</p>
                <p className="text-3xl font-bold text-[#C6A75E]">R$ 850</p>
              </div>
            </div>

            <a
              href="https://wa.me/5531991028853?text=Oi quero informações sobre o curso de extensão de cílios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Quero me inscrever
            </a>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="/WhatsApp_Image_2026-02-16_at_12.53.19.jpeg"
              alt="Bianca Moura"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
