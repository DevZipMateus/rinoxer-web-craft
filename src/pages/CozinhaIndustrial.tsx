import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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

const CozinhaIndustrial = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[300px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img 
              src={cozinhaIndustrialImg} 
              alt="Área Alimentação" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white mb-4 hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
              Voltar
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Área Alimentação
            </h1>
            <p className="text-xl text-white mt-4">
              Equipamentos Completos em Aço Inox para sua Cozinha Profissional
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Soluções Completas para Cozinhas Industriais
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Desenvolvemos projetos completos de cozinhas industriais em aço inox, 
                atendendo restaurantes, hotéis, refeitórios, padarias e estabelecimentos 
                do setor alimentício com equipamentos de alta performance e durabilidade.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={24} />
                    Equipamentos
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li>• Mesas de Trabalho</li>
                    <li>• Pias e Cubas Industriais</li>
                    <li>• Prateleiras e Estantes</li>
                    <li>• Armários e Gabinetes</li>
                    <li>• Coifas e Exaustores</li>
                    <li>• Bancadas de Apoio</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={24} />
                    Vantagens
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li>• Projeto Sob Medida</li>
                    <li>• Material Durável e Higiênico</li>
                    <li>• Conformidade com Vigilância Sanitária</li>
                    <li>• Instalação Completa</li>
                    <li>• Manutenção Facilitada</li>
                    <li>• Garantia de Qualidade</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Solicite seu Projeto Personalizado
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nossa equipe está pronta para desenvolver a área alimentação 
                  ideal para o seu negócio. Solicite um orçamento sem compromisso.
                </p>
                <a 
                  href="https://wa.me/5519983134643" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products Gallery Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Nossos Equipamentos para Área Alimentação
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Conheça alguns dos equipamentos em aço inox que fabricamos
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={cozinhaCompleta1} 
                    alt="Cozinha Industrial Completa" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={mesaTrabalhoEstrutura} 
                    alt="Mesa de Trabalho em Estrutura" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={bancadaPias} 
                    alt="Bancada com Pias" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={cozinhaCompleta2} 
                    alt="Cozinha Industrial Completa" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={equipamentoCocao} 
                    alt="Equipamento de Cocção" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={coifaBancada}
                    alt="Coifa e Bancada Industrial" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={coifaMesas2} 
                    alt="Coifa e Mesas de Trabalho" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={piaCirurgicaLonga} 
                    alt="Pia Cirúrgica Longa" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={bancadaCompleta} 
                    alt="Bancada Completa com Pias" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={cozinhaFogaoCoifa} 
                    alt="Cozinha com Fogão e Coifa" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={balcaoInox} 
                    alt="Balcão em Aço Inox" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={bancadaLPias} 
                    alt="Bancada em L com Pias" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={estanteServico} 
                    alt="Estante de Serviço" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={buffetBanhoMaria} 
                    alt="Buffet Banho Maria" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={balcaoPortas} 
                    alt="Balcão com Portas" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={mesaPrateleiras} 
                    alt="Mesa com Prateleiras" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={balcaoRefrigeradoPia} 
                    alt="Balcão Refrigerado com Pia" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={gabinetePia} 
                    alt="Gabinete com Pia" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={coifaGrande} 
                    alt="Coifa Industrial Grande" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={coifaSuspensa} 
                    alt="Coifa Suspensa" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={coifaParede} 
                    alt="Coifa de Parede" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={coifaFiltros} 
                    alt="Coifa com Filtros" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={dutoExaustao} 
                    alt="Duto de Exaustão" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
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
