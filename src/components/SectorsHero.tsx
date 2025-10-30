import { Link } from "react-router-dom";
import areaSaudeImg from "@/assets/area-saude.jpeg";
import cozinhaIndustrialImg from "@/assets/cozinha-industrial.jpeg";

const SectorsHero = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Área da Saúde */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-[4/3] relative">
              <img 
                src={areaSaudeImg} 
                alt="Área da Saúde - Equipamentos em Aço Inox" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Área da Saúde
              </h3>
              <Link 
                to="/area-saude"
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-elegant"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* Cozinha Industrial */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <div className="aspect-[4/3] relative">
            <img 
              src={cozinhaIndustrialImg} 
              alt="Cozinha Industrial - Equipamentos em Aço Inox" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Cozinha Industrial
              </h3>
              <Link 
                to="/cozinha-industrial"
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-elegant"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsHero;
