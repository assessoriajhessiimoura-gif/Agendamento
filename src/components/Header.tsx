import { Eye } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm animate-gentle-sway">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="w-6 h-6 text-[#C6A75E]" />
          <span className="text-xl font-semibold text-[#3A2E2A]">Bianca Moura</span>
        </div>
        <ul className="flex gap-8">
          <li>
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-[#3A2E2A] hover:text-[#C6A75E] transition-colors"
            >
              Início
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('procedimentos')}
              className="text-[#3A2E2A] hover:text-[#C6A75E] transition-colors"
            >
              Procedimentos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-[#3A2E2A] hover:text-[#C6A75E] transition-colors"
            >
              Contato
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
