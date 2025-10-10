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
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Lado Esquerdo - Texto */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* H1 - Nome da empresa */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Rinoxer
            </h1>

            {/* H2 - Descrição da empresa */}
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Rinoxer Fabricação de Cozinha Industrial em Aço Inox
            </h2>

            {/* Slogan */}
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-12">
              A Força em Aço Inox
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a 
                href="https://wa.me/5519983134643" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group px-8 py-4 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-elegant flex items-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <button 
                onClick={scrollToContact} 
                className="px-8 py-4 bg-background hover:bg-secondary text-foreground border-2 border-primary hover:border-primary-dark rounded-lg font-semibold transition-all duration-300"
              >
                Fale Conosco
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-primary mb-2">500m²</div>
                <div className="text-sm text-muted-foreground">Estrutura completa</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Qualidade garantida</div>
              </div>
            </div>
          </div>

          {/* Lado Direito - Vídeo */}
          <div className="flex items-center justify-center">
            <video 
              className="w-full h-auto rounded-lg shadow-elegant" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/galeria/video/hero.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;