export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 animate-gentle-sway">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/WhatsApp_Image_2026-02-16_at_12.53.19.jpeg)',
          filter: 'brightness(1.1)'
        }}
      />
      {/* ✅ degradê ajustado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="bg-[#3A2E2A]/20 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto shadow-xl border border-[#C6A75E]/30">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg animate-gentle-sway">
            Bianca Moura Lash Designer
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
            Especialista em Extensão de Cílios em Belo Horizonte
          </p>
          <p className="text-lg text-white mb-8 drop-shadow-md">
            Realce sua beleza natural com técnicas premium de alongamento de cílios
          </p>
          <button
            onClick={() => scrollToSection('procedimentos')}
            className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-gentle-sway"
          >
            Agendar Horário
          </button>
        </div>
      </div>
    </section>
  );
}
