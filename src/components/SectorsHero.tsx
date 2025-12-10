import { Link } from "react-router-dom";
import areaSaudeImg from "@/assets/area-saude.jpeg";
import cozinhaIndustrialImg from "@/assets/cozinha-industrial-bg.jpg";
const SectorsHero = () => {
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Área da Saúde */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-video relative">
              <img src={areaSaudeImg} alt="Área da Saúde - Equipamentos em Aço Inox" className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 className="text-3xl font-bold mb-6 md:text-6xl text-primary-foreground">
                Área da Saúde
              </h3>
              <Link to="/area-saude" className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-elegant">
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* Área Alimentação */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-video relative">
              <img src={cozinhaIndustrialImg} alt="Área Alimentação - Equipamentos em Aço Inox" className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-3xl font-bold mb-6 text-primary-foreground md:text-6xl">
                  Área Alimentação
                </h3>
                <Link to="/cozinha-industrial" className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-elegant">
                  Saiba Mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SectorsHero;