import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageLightbox from "@/components/ImageLightbox";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import areaSaudeImg from "@/assets/area-saude.jpeg";
import bancadaLab from "@/assets/saude/bancada-laboratorio.jpg";
import armarioInox from "@/assets/saude/armario-inox.jpg";
import carrinhoMed from "@/assets/saude/carrinho-medicacao.jpg";
import piaCirurgica from "@/assets/saude/pia-cirurgica.jpg";
import mesaInstrumentos from "@/assets/saude/mesa-instrumentos.jpg";
import bancadaSaude from "@/assets/saude/bancada-saude.jpg";
import lixeiraHospitalar from "@/assets/saude/lixeira-hospitalar.jpg";
import macaExame from "@/assets/saude/maca-exame.jpg";
import bandejaEsterilizacao from "@/assets/saude/bandeja-esterilizacao.jpg";
import cabeceiraLeito from "@/assets/saude/cabeceira-leito.jpg";
import balcaoFarmacia from "@/assets/saude/balcao-farmacia.jpg";
import balcaoFarmacia2 from "@/assets/saude/balcao-farmacia-2.jpg";
import carroUtilitario from "@/assets/saude/carro-utilitario.jpg";
import cozinhaCompleta2 from "@/assets/cozinha/cozinha-completa-2.jpg";

const galleryImages = [
  { src: bancadaLab, alt: "Bancada para Laboratório" },
  { src: armarioInox, alt: "Armário em Aço Inox" },
  { src: carrinhoMed, alt: "Carrinho de Medicação" },
  { src: piaCirurgica, alt: "Pia Cirúrgica" },
  { src: mesaInstrumentos, alt: "Mesa para Instrumentos" },
  { src: bancadaSaude, alt: "Bancada em Aço Inox" },
  { src: lixeiraHospitalar, alt: "Lixeira Hospitalar" },
  { src: carroUtilitario, alt: "Carro Utilitário" },
  { src: bandejaEsterilizacao, alt: "Bandeja de Esterilização" },
  { src: cabeceiraLeito, alt: "Cabeceira de Leito" },
  { src: balcaoFarmacia, alt: "Balcão para Farmácia" },
  { src: balcaoFarmacia2, alt: "Balcão para Farmácia" },
  { src: cozinhaCompleta2, alt: "Cozinha Industrial Completa" },
];

const AreaSaude = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img 
              src={areaSaudeImg} 
              alt="Área da Saúde" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white mb-2 sm:mb-4 hover:text-primary transition-colors text-sm sm:text-base"
            >
              <ArrowLeft size={18} />
              Voltar
            </Link>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Área da Saúde
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white mt-2 sm:mt-4">
              Soluções em Aço Inox para Ambientes Hospitalares
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 sm:py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Equipamentos para Hospitais e Clínicas
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Fabricamos equipamentos em aço inox de alta qualidade para ambientes hospitalares, 
                clínicas, laboratórios e consultórios, garantindo higiene, durabilidade e conformidade 
                com as normas sanitárias.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={20} />
                    Produtos Principais
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2 ml-6 sm:ml-8 text-sm sm:text-base">
                    <li>• Bancadas para Laboratório</li>
                    <li>• Armários e Estantes</li>
                    <li>• Carrinhos de Medicação</li>
                    <li>• Pias e Lavabos Cirúrgicos</li>
                    <li>• Mesas para Instrumentos</li>
                    <li>• Prateleiras e Suportes</li>
                  </ul>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={20} />
                    Diferenciais
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2 ml-6 sm:ml-8 text-sm sm:text-base">
                    <li>• Aço Inox AISI 304/316</li>
                    <li>• Fácil Higienização</li>
                    <li>• Resistente a Corrosão</li>
                    <li>• Materia prima</li>
                    <li>• Projetos Personalizados</li>
                    <li>• Instalação Profissional</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Solicite um Orçamento Personalizado
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Entre em contato conosco para desenvolver uma solução sob medida 
                  para sua instituição de saúde.
                </p>
                <a 
                  href="https://wa.me/5519983134643" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products Gallery Section */}
        <section className="py-10 sm:py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center">
                Nossos Produtos para Área da Saúde
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 text-center">
                Conheça alguns dos equipamentos em aço inox que fabricamos
              </p>
              
              <ImageLightbox images={galleryImages} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AreaSaude;
