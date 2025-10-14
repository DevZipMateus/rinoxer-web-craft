import { ArrowRight } from "lucide-react";
import logoRinoxer from "@/assets/logo-rinoxer.png";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/hero-background.jpg" alt="Cozinha Industrial em Aço Inox" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Texto centralizado com fundo preto esmaecido */}
          <div className="text-center animate-fade-in backdrop-blur-sm rounded-2xl p-8 md:p-12 bg-black/[0.12]">
            {/* H1 - Nome da empresa */}
            <h1 className="text-5xl font-bold mb-6 text-zinc-950 md:text-7xl">
              Rinoxer
            </h1>

            {/* H2 - Descrição da empresa */}
            <h2 className="text-xl mb-8 leading-relaxed text-slate-50 md:text-2xl">
              Rinoxer Fabricação de Cozinha Industrial em Aço Inox
            </h2>

            {/* Slogan */}
            <p className="text-2xl font-semibold mb-12 text-slate-50 md:text-3xl">
              A Força em Aço Inox
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/5519983134643" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-elegant flex items-center gap-2">
                Solicitar Orçamento
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <button onClick={scrollToContact} className="px-8 py-4 bg-background hover:bg-secondary text-foreground border-2 border-primary hover:border-primary-dark rounded-lg font-semibold transition-all duration-300">
                Fale Conosco
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground bg-slate-50">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500m²</div>
                <div className="text-sm text-muted-foreground bg-slate-50">Estrutura completa</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground bg-slate-50">Qualidade garantida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;