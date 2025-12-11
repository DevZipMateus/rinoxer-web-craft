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
  return <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/hero-background.jpg" alt="Área Alimentação em Aço Inox" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            {/* Badge */}
            
            {/* H1 - Título principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white">
              Rinoxer
            </h1>
            {/* H2 - Descrição da empresa */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed text-slate-50 mt-2 sm:mt-4">
              Rinoxer Fabricação de Cozinha Industrial em Aço Inox
            </h2>

            {/* Slogan */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-8 sm:mb-12 text-slate-50">
              A Força em Aço Inox
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a href="https://wa.me/5519983134643" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-elegant flex items-center justify-center gap-2 text-sm sm:text-base">
                Solicitar Orçamento
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <button onClick={scrollToContact} className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-background hover:bg-secondary text-foreground border-2 border-primary hover:border-primary-dark rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base">
                Fale Conosco
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground bg-slate-50 px-1 py-0.5 rounded">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">500m²</div>
                <div className="text-xs sm:text-sm text-muted-foreground bg-slate-50 px-1 py-0.5 rounded">Estrutura completa</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground bg-slate-50 px-1 py-0.5 rounded">Qualidade garantida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;