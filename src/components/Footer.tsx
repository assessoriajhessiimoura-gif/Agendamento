import { Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#3A2E2A] text-white py-12 animate-gentle-sway">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/bianca.cilioss?igsh=MW0yeWJ2Yjh5b2g4bw=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C6A75E] hover:bg-[#C6A75E]/80 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/5531991028853"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C6A75E] hover:bg-[#C6A75E]/80 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="mailto:assessoriabiancamoura@gmail.com"
              className="bg-[#C6A75E] hover:bg-[#C6A75E]/80 p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-white/80">
              © 2026 Bianca Moura Lash Designer Belo Horizonte
            </p>
            <p className="text-white/60 text-sm mt-1">
              Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
