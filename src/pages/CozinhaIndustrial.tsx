import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageLightbox from "@/components/ImageLightbox";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import cozinhaIndustrialImg from "@/assets/cozinha-industrial.jpeg";
import cozinhaCompleta1 from "@/assets/cozinha/cozinha-completa-1.jpg";
import mesaTrabalhoEstrutura from "@/assets/cozinha/mesa-trabalho-estrutura.jpg";
import bancadaPias from "@/assets/cozinha/bancada-pias.jpg";
import cozinhaCompleta2 from "@/assets/cozinha/cozinha-completa-2.jpg";
import equipamentoCocao from "@/assets/cozinha/equipamento-cocao.jpg";
import coifaBancada from "@/assets/cozinha/coifa-bancada.jpg";
import coifaMesas2 from "@/assets/cozinha/coifa-mesas-2.jpg";
import piaCirurgicaLonga from "@/assets/cozinha/pia-cirurgica-longa.jpg";
import bancadaCompleta from "@/assets/cozinha/bancada-completa.jpg";
import cozinhaFogaoCoifa from "@/assets/cozinha/cozinha-fogao-coifa.jpg";
import balcaoInox from "@/assets/cozinha/balcao-inox.jpg";
import bancadaLPias from "@/assets/cozinha/bancada-l-pias.jpg";
import estanteServico from "@/assets/cozinha/estante-servico.jpg";
import buffetBanhoMaria from "@/assets/cozinha/buffet-banho-maria.jpg";
import balcaoPortas from "@/assets/cozinha/balcao-portas.jpg";
import mesaPrateleiras from "@/assets/cozinha/mesa-prateleiras.jpg";
import balcaoRefrigeradoPia from "@/assets/cozinha/balcao-refrigerado-pia.jpg";
import gabinetePia from "@/assets/cozinha/gabinete-pia.jpg";
import coifaGrande from "@/assets/cozinha/coifa-grande.jpg";
import coifaSuspensa from "@/assets/cozinha/coifa-suspensa.jpg";
import coifaParede from "@/assets/cozinha/coifa-parede.jpg";
import coifaFiltros from "@/assets/cozinha/coifa-filtros.jpg";
import dutoExaustao from "@/assets/cozinha/duto-exaustao.jpg";

const galleryImages = [
  { src: cozinhaCompleta1, alt: "Cozinha Industrial Completa" },
  { src: mesaTrabalhoEstrutura, alt: "Mesa de Trabalho em Estrutura" },
  { src: bancadaPias, alt: "Bancada com Pias" },
  { src: cozinhaCompleta2, alt: "Cozinha Industrial Completa" },
  { src: equipamentoCocao, alt: "Equipamento de Cocção" },
  { src: coifaBancada, alt: "Coifa e Bancada Industrial" },
  { src: coifaMesas2, alt: "Coifa e Mesas de Trabalho" },
  { src: piaCirurgicaLonga, alt: "Pia Cirúrgica Longa" },
  { src: bancadaCompleta, alt: "Bancada Completa com Pias" },
  { src: cozinhaFogaoCoifa, alt: "Cozinha com Fogão e Coifa" },
  { src: balcaoInox, alt: "Balcão em Aço Inox" },
  { src: bancadaLPias, alt: "Bancada em L com Pias" },
  { src: estanteServico, alt: "Estante de Serviço" },
  { src: buffetBanhoMaria, alt: "Buffet Banho Maria" },
  { src: balcaoPortas, alt: "Balcão com Portas" },
  { src: mesaPrateleiras, alt: "Mesa com Prateleiras" },
  { src: balcaoRefrigeradoPia, alt: "Balcão Refrigerado com Pia" },
  { src: gabinetePia, alt: "Gabinete com Pia" },
  { src: coifaGrande, alt: "Coifa Industrial Grande" },
  { src: coifaSuspensa, alt: "Coifa Suspensa" },
  { src: coifaParede, alt: "Coifa de Parede" },
  { src: coifaFiltros, alt: "Coifa com Filtros" },
  { src: dutoExaustao, alt: "Duto de Exaustão", objectPosition: "top" },
];

const CozinhaIndustrial = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img 
              src={cozinhaIndustrialImg} 
              alt="Área Alimentação" 
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
              Área Alimentação
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white mt-2 sm:mt-4">
              Equipamentos Completos em Aço Inox para sua Cozinha Profissional
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 sm:py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Soluções Completas para Cozinhas Industriais
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Desenvolvemos projetos completos de cozinhas industriais em aço inox, 
                atendendo restaurantes, hotéis, refeitórios, padarias e estabelecimentos 
                do setor alimentício com equipamentos de alta performance e durabilidade.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={20} />
                    Equipamentos
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2 ml-6 sm:ml-8 text-sm sm:text-base">
                    <li>• Mesas de Trabalho</li>
                    <li>• Pias e Cubas Industriais</li>
                    <li>• Prateleiras e Estantes</li>
                    <li>• Armários e Gabinetes</li>
                    <li>• Coifas e Exaustores</li>
                    <li>• Bancadas de Apoio</li>
                  </ul>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={20} />
                    Vantagens
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2 ml-6 sm:ml-8 text-sm sm:text-base">
                    <li>• Projeto Sob Medida</li>
                    <li>• Material Durável e Higiênico</li>
                    <li>• Conformidade com Vigilância Sanitária</li>
                    <li>• Instalação Completa</li>
                    <li>• Manutenção Facilitada</li>
                    <li>• Garantia de Qualidade</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Solicite seu Projeto Personalizado
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Nossa equipe está pronta para desenvolver a área alimentação 
                  ideal para o seu negócio. Solicite um orçamento sem compromisso.
                </p>
                <a 
                  href="https://wa.me/5519983134643" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
                >
                  Solicitar Orçamento
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
                Nossos Equipamentos para Área Alimentação
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

export default CozinhaIndustrial;
